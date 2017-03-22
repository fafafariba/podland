import React from 'react';
import Select from 'react-select';
import PlaylistItem from './playlist_item';
import Collapsible from 'react-collapsible';

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.state = { tracks: ""};
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  setTracks(playlistId){
    this.props.fetchTracks(playlistId);
  }

  playHandler() {
    //Play on player
  }

  createPlaylistHandler(){
    //Modal
  }

  deletePlaylistHandler(id){
    this.props.deletePlaylist(id);
  }

  deleteTrackHandler(id){
    this.props.deleteTrack(id);
  }


  render(){

    let playlistTitles = <p>No playlists... yet... </p>;

    if (this.props.playlists != {}) {
      playlistTitles = Object.values(this.props.playlists)
        .map( (playlist, idx) => (
          <div key={playlist+idx}>
            <Collapsible className="collapsible"
              trigger={ playlist.name }
              onClick={ () => this.setTracks(playlist.id) } >
              <PlaylistItem tracks={this.props.tracks}/>
            </Collapsible>
            <p id="delete-playlist" onClick={() => this.deletePlaylistHandler(playlist.id)}>
              Delete Playlist</p>
          </div>
      ));
    }

    return (
      <main className="playlists">
        <header>
          <h2>Playlists</h2>
        </header>
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

// <Select
//   className="nav"
//   name="form-field-name"
//   value="first"
//   options={options}
//   />
