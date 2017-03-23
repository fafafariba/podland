import React from 'react';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import addTrackModalStyle from './add_track_modal_style';
import SelectPlaylistItem from './select_playlist_item';


class EpisodeTrack extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
    this.addToPlaylistHandler = this.addToPlaylistHandler.bind(this);
    this.state = { modalOpen: false, selectedPlaylist: ""};
    this.openModal = this.openModal.bind(this);
    this.onAddTrackModalClose = this.onAddTrackModalClose.bind(this);
  }

  playHandler(audio) {
    this.props.receiveAudio(audio);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  addToPlaylistHandler(track) {

  }

  onAddTrackModalClose() {
    event.preventDefault();
    this.setState({ modalOpen: false });
  }

  render(){

    let title =
    <header className="all-episodes-header">
      <ul>
        <li>
          <h4>No. {this.props.episode.no} {this.props.episode.name}</h4>
        </li>
        <li>
          <p>{this.props.episode.duration}</p>
        </li>
        <li className="row-buttons">
          <ul>
            <li><i className="fa fa-play" aria-hidden="true"
              title="Add to Playlist"
              onClick={ ()=> this.addToPlaylistHandler([this.props.episode]) }>
            </i></li>
            <li><i className="fa fa-plus" title="Play Episode" aria-hidden="true"
              onClick={this.openModal} aria-hidden="true">
            </i></li>
          </ul>
        </li>
      </ul>
    </header>;



    return (
      <div>
        <Collapsible className="collapsible"
          trigger={title}>
          <p>{this.props.episode.description}</p>
        </Collapsible>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onAddTrackModalClose}
          style={addTrackModalStyle}
          contentLabel="addTrack">
          <h4>Select Playlist:</h4>
          <SelectPlaylistItem playlists={Object.values(this.props.playlists)} />
          <button onSubmit={this.addToPlaylistHandler}>Add</button>
          <button onClick={this.onAddTrackModalClose} id="outer-modal-button">
          close</button>
        </Modal>
      </div>
    );
  }
}

export default EpisodeTrack;
