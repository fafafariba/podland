class Api::PlaylistsController < ApplicationController

  before_action :set_playlist, only: [:destroy]

  def index
    @playlists = current_user.playlists
    render 'api/playlists/index'
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    if @playlist.save
      'api/playlists/show'
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist.destroy
    render 'api/playlists/show'
  end

  private

  def set_playlist
    @playlist = Playlist.find(params[:id])
  rescue
    render json: ["Playlist doesn't exist"], status: 404
  end

  def playlist_params
    params.require(:playlist).permit(:name, :user_id)
  end
end
