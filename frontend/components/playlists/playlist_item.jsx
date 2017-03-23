import React from 'react';
import Link from 'react-router';

class PlaylistItem extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
  }

  deleteHandler(episodeId) {
    this.props.deleteTrack(this.props.playlistId, episodeId);
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

    if (this.props.tracks.length > 0) {
      tracks = this.props.tracks.map((episode, idx) => (
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
              <div className="track-add">
                <i className="fa fa-play" aria-hidden="true"
                  title="Play Track"
                  onClick={ () => this.playHandler([episode]) } ></i>
              </div>
              <div className="track-delete">
                <i className="fa fa-times" aria-hidden="true"
                  title="Delete Track from Playlist"></i>
              </div>

            </li>
          </ul>
        </li>
      ));
    }

    return (
      <div>
        <ul>
          { tracks }
        </ul>
      </div>
    );
  }
}

export default PlaylistItem;
