import React from 'react';
import Link from 'react-router';

class PlaylistItem extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
    this.deleteTrackHandler = this.deleteTrackHandler.bind(this);
    this.deletePlaylistHandler = this.deletePlaylistHandler.bind(this);
  }

  deletePlaylistHandler(id){
    this.props.deletePlaylist(id);
  }

  deleteTrackHandler(id) {
    this.props.deleteTrack(this.props.playlist.id, id);
  }

  playHandler(episode){
    this.props.receiveAudio(episode);
  }

  render() {
    let tracks = <div></div>;
      // <li>
      //   <Link to={`/podcasts/${episode.podcast_id}`}>
      //     <img src={episode.podcast_image_url} />
      //   </Link>
      // </li>

    if (this.props.playlist.episodes && this.props.playlist.episodes.length > 0) {
      tracks = this.props.playlist.episodes.map((episode, idx) => (
        <li key={episode+idx} className="track">
          <ul>
            <li className="track-thumb" >
              <img src={episode.podcast_thumb_url} />
            </li>
            <li className="track-title">
              <p>No. {episode.no} {episode.name}</p>
            </li>
            <li className="track-duration">
              <p>{episode.duration}</p>
            </li>
            <li className="track-row-buttons">
              <div className="track-play">
                <i className="fa fa-play" aria-hidden="true"
                  title="Play Track"
                  onClick={ () => this.playHandler([episode]) } ></i>
              </div>
              <div className="track-delete">
                <i className="fa fa-times" aria-hidden="true"
                  title="Delete Track from Playlist"
                  onClick= { () => this.deleteTrackHandler(episode.id)}></i>
              </div>

            </li>
          </ul>
        </li>
      ));

    }

    return (
      <div>
        <ul>
          <div className="play-all-button-container">
            <button id="play-all-button"
              onClick={() => this.playHandler(this.props.playlist.episodes)}>
              Play All</button>
          </div>
          { tracks }
        </ul>
        <div className="delete-playlist">
          <p onClick=
            { () => this.deletePlaylistHandler(this.props.playlist.id) }>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          Delete Playlist</p>
        </div>
      </div>
    );
  }
}

export default PlaylistItem;
