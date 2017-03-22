import React from 'react';
import PlaylistItem from './playlist_item';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
import modalStyle from './modal_style';

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.createPlaylistHandler = this.createPlaylistHandler.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.state = { modalOpen: false, newPlaylist: "New Playlist"};
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  playHandler() {
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  inputHandler(event){
    this.setState({newPlaylist: event.currentTarget.value});
  }

  createPlaylistHandler(){
    event.preventDefault();
    this.props.addPlaylist(this.state.newPlaylist);
  }

  onModalClose() {
    this.setState({ modalOpen: false });
  }

  deletePlaylistHandler(id){
    this.props.deletePlaylist(id);
  }

  render(){

    let playlistTitles = <p>No playlists... yet... </p>;

    if (this.props.playlists !== {}) {
      playlistTitles = Object.values(this.props.playlists)
        .map( (playlist, idx) => (
          <div key={playlist+idx}>
            <Collapsible className="collapsible"
              trigger={ playlist.name }
              onClick={ () => this.setTracks(playlist.id) } >
              <PlaylistItem tracks={playlist.episodes}
                playlistId={playlist.id}
                deleteTrack={ (id) => this.props.deleteTrack(id) } />
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
            onRequestClose={this.onModalClose}
            style={modalStyle}
            contentLabel="playlist">
              <form onSubmit={this.createPlaylistHandler}>
                <label>
                  <h4>Enter Playlist Name:</h4>
                  <br/>
                  <input type="text" onChange={this.inputHandler.bind(this)}
                    value={this.state.newPlaylist} />
                </label>
                <br />
                <input type="submit" id="splash-nav-modal-button" />
              </form>
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
