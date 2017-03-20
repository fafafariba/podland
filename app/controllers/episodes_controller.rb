class EpisodesController < ApplicationController

  def index
    @episodes = Podcast.episodes
    render json: @episodes
  end

  def show
    @episode = Episode.find(params[:id])
    if @episode
      render json: @episode
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
