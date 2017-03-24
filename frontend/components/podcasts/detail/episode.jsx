import React from 'react';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import addTrackModalStyle from './add_track_modal_style';
import SelectPlaylistItemContainer from './select_playlist_item_container';


class Episode extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
    this.state = { modalOpen: false, epsiodeId: null};
    this.openModal = this.openModal.bind(this);
    this.onAddTrackModalClose = this.onAddTrackModalClose.bind(this);
  }

  playHandler(audio) {
    this.props.receiveAudio(audio);
  }

  openModal(id){
    this.setState({modalOpen: true, episodeId: id});
  }

  onAddTrackModalClose() {
    event.preventDefault();
    this.props.clearMessages();
    this.setState({ modalOpen: false });
  }

  displayMessages(){
    if (this.props.messages && this.props.messages.length) {
      return (
        <p className="errors">{this.props.messages}</p>
      );
    }
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
              title="Play Episode"
              onClick={ ()=> this.playHandler([this.props.episode]) }>
            </i></li>
          <li><i className="fa fa-plus" title="Add to Playlist" aria-hidden="true"
              onClick={()=> this.openModal(this.props.episode.id)} aria-hidden="true">
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
          {this.displayMessages()}
          <SelectPlaylistItemContainer episodeId={this.state.episodeId} />
          <button onClick={this.onAddTrackModalClose} className="outer-modal-button">
          close</button>
        </Modal>
      </div>
    );
  }
}

export default Episode;
