import React from 'react';
import PlaylistItem from './playlist_item';
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
    this.state = { modalOpen: false, playlistName: "Whatever"};
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  playHandler() {
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  inputHandler(){
    event.preventDefault();
    this.setState({playlistName: event.currentTarget.value});
  }

  createPlaylistHandler(){
    event.preventDefault();
    this.props.addPlaylist(this.state.playlistName);
  }

  onPlaylistModalClose() {
    event.preventDefault();
    this.setState({ modalOpen: false });
  }

  deletePlaylistHandler(id){
    this.props.deletePlaylist(id);
  }

  displayErrors(){
    let errors =<div></div>;
    if (this.props.errors && this.props.errors.length){
      console.log(this.props.errors, "errors");
      errors = <p className="errors">{this.props.errors}</p>;
    }
  }

  render() {

    let playlistTitles = <p>No playlists... yet... </p>;

    if (this.props.playlists !== {}) {
      playlistTitles = Object.values(this.props.playlists)
        .map( (playlist, idx) => (
          <div key={playlist+idx}>
            <Collapsible className="collapsible"
              trigger={ playlist.name }
              onClick={ () => this.setTracks(playlist.id) } >
              <PlaylistItem tracks={ playlist.episodes }
                playlistId={playlist.id}
                deleteTrack={ this.props.deleteTrack }
                receiveAudio={ this.props.receiveAudio } />
            </Collapsible>
            <p id="delete-playlist" onClick=
              { () => this.deletePlaylistHandler(playlist.id) }>
              Delete Playlist</p>
          </div>
      ));
    }

    return (
      <main className="playlists">
        <header>
          <h2>Playlists</h2>
        </header>
        <button onClick={this.openModal}>
          + New Playlist</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onPlaylistModalClose}
          style={playlistModalStyle}
          contentLabel="playlist">
          <div className="modal-playlist-content">
            <form onSubmit={this.createPlaylistHandler}>
              <label>
                <h4>Enter Playlist Name:</h4>
                <br/>
                {this.displayErrors()}
                <input type="text" onChange={this.inputHandler}
                  value={this.state.playlistName} />
              </label>
              <br />
              <input type="submit" id="playlist-nav-modal-button" />
            </form>
            <button onClick={this.onPlaylistModalClose} className="outer-modal-button">
              close
            </button>
          </div>
        </Modal>


        <nav className="playlist-collapsibles">
          { playlistTitles }
        </nav>
        <section>
        </section>
      </main>
    );
  }
}

export default Playlists;
