class Api::PodcastsController < ApplicationController

  def create
    @podcast = Podcast.new(podcast_params)
    unless @podcast.create
      render json: @podcast.errors.full_messages
    end
  end

  def index
    @podcasts = Podcast.all.order(:name)
    render 'api/podcasts/all'
  end

  def show
    @podcast = Podcast.find(params[:id])
    if @podcast
      render 'api/podcasts/show'
    else
      render json: ["Podcast doesn't exist"], status: 404
    end
  end

  private

  def podcast_params
    params.require(:podcast).permit(:id, :name, :description, :category,
    :image_url, :thumb_url, :link)
  end
end
