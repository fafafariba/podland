import React from 'react';

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentPlaylist: "" };
  }

  componentDidMount(){
    // this.props.fetchPlaylists();
  }

  playHandler() {
    //Play on player
  }

  createPlaylistHandler(){
    //Modal
  }

  deletePlaylistHandler(id){
    //Modal are you sure you want to delete?
    this.props.deletePlaylist(id);
  }

  deleteTrackHandler(id){
    this.props.deleteTrack(id);
  }

  render(){

    return (
      <main className="playlists">
        <header>
          <h2>Playlists</h2>
        </header>
      </main>
    );
  }


}
