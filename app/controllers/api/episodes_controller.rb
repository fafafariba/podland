class Api::EpisodesController < ApplicationController

  def create
    @episode = Episode.new(episode_params)
    @episode.save
    render 'api/episodes/show'
  end

  def index
    @episodes = Podcast.episodes
    render 'api/episodes/index'
  end

  def show
    @episode = Episode.find(params[:id])
    if @episode
      render 'api/episodes/show'
    else
      render json: @episode.errors.full_messages
    end
  end

  private

  def episode_params
    params.require(:episode).permit(:name, :description, :podcast_id,
      :audio_url, :date, :no, :duration, :image_url)
  end

end
