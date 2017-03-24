class Api::TracksController < ApplicationController

  # before_action :set_track, only: [:destroy]

  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: ["Duplicate Entry."], status: 422
    end
  end

  def destroy
    @track = Track.find_by_playlist_id_and_episode_id(
    params[:playlist_id], params[:episode_id])
    @track.destroy
    render 'api/tracks/show'
  end

  private

  def set_track
    @track = Track.find_by_playlist_id_and_episode_id(
    params[:playlist_id], params[:episode_id])
  rescue
    render json: ["Track doesn't exist."], status: 404
  end

  def track_params
    params.require(:track).permit(:playlist_id, :episode_id)
  end
end
