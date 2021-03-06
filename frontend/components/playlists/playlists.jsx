import React from 'react';
import PlaylistItemContainer from './playlist_item_container';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import playlistModalStyle from './playlist_modal_style';

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.createPlaylistHandler = this.createPlaylistHandler.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onPlaylistModalClose = this.onPlaylistModalClose.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.playHandler = this.playHandler.bind(this);
    this.state = { modalOpen: false, playlistName: ""};
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.messages && nextProps.messages.length){
  //     this.setState({ playlistName: ""});
  //   }
  // }

  playHandler(audio) {
    this.receiveAudio(audio);
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  inputHandler(event){
    event.preventDefault();
    this.setState({playlistName: event.currentTarget.value});
  }

  createPlaylistHandler(){
    event.preventDefault();
    this.props.addPlaylist(this.state.playlistName);
  }

  onPlaylistModalClose() {
    event.preventDefault();
    this.props.clearMessages();
    this.setState({ modalOpen: false, playlistName: "" });
  }

  deletePlaylistHandler(id){
    this.props.deletePlaylist(id);
  }


  displayErrors(){
    if (this.props.messages && this.props.messages.length){
      return (<p className="errors">{this.props.messages}</p>);
    } else {
      return (<div></div>);
    }
  }

  render() {

    let playlistTitles = <p>No playlists... yet... </p>;

    if (this.props.playlists !== {}) {

      playlistTitles = Object.values(this.props.playlists)
        .map( (playlist, idx) => {
          return (
          <div key={playlist+idx} id="collapsible-inner">
            <Collapsible className="playlists-collapsible"
              transitionTime={0}
              trigger={<div className="playlists-collapsible-header">
                <h4>{playlist.name}</h4></div>}>
              <PlaylistItemContainer playlist={ playlist }  />
            </Collapsible>
          </div>
        );
    });
  }


    return (
      <main className="playlists">
        <header>
          <ul>
          <li>
            <h2>Playlists</h2>
            </li>
            <li>
              <button className="create-playlist" onClick={this.openModal}>
                + New Playlist</button>
            </li>
          </ul>
        </header>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onPlaylistModalClose}
          style={playlistModalStyle}
          contentLabel="playlist"
          className="modal-playlist-content">
            <div className="modal-playlist-form">
              <h4>Enter Playlist Name:</h4>
              {this.displayErrors()}
            <form onSubmit={this.createPlaylistHandler}>
              <input type="text" onChange={this.inputHandler}
                value={this.state.playlistName} />
              <input type="submit" id="playlist-nav-modal-button" />

            <button onClick={this.onPlaylistModalClose}
              className="outer-modal-button">
              close
            </button>
            </form>
          </div>
        </Modal>


        <nav className="playlist-collapsibles">
          { playlistTitles }
        </nav>
      </main>
    );
  }
}

export default Playlists;

// onClick={ () => this.setTracks(playlist.id)
