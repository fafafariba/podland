class Api::PodcastsController < ApplicationController

  before_action :set_podcast, only: [:show]

  def create
    @podcast = Podcast.new(podcast_params)
    unless @podcast.create
      render json: @podcast.errors.full_messages
    end
  end

  def index
    filter = params["filter"]
    unless filter == ""
      if filter == "featured"
        @podcasts = Podcast.featured
        render 'api/podcasts/all'
      elsif filter == "popular"
        @podcasts = Podcast.popular
        render 'api/podcasts/all'
      else
        render json: filter
      end
    else
      @podcasts = Podcast.all.order(:name)
      render 'api/podcasts/all'
    end
  end

  def show
    render 'api/podcasts/show'
  end

  private

  def set_podcast
    @podcast = Podcast.find(params[:id])
  rescue
    render json: ["Podcast doesn't exist"], status: 404
  end

  def podcast_params
    params.require(:podcast).permit(:id, :name, :description, :category,
    :image_url, :thumb_url, :link, :filter)
  end
end
