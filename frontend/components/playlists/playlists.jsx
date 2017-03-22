import React from 'react';
import Select from 'react-select';

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

    let defaultTracks = <p>No playlists... yet... </p>;

    if (this.props.tracks) {
      defaultTracks = this.props.tracks;
    }

    const options = [
      { value: 'one', label: 'One', clearableValue: false },
      { value: 'two', label: 'Two', clearableValue: false }
    ];

    return (
      <main className="playlists">
        <header>
          <h2>Playlists</h2>
        </header>
        <nav>
          <Select
            className="nav"
            name="form-field-name"
            value="one"
            options={options}
            />
        </nav>
        <section>
          { defaultTracks }
        </section>
      </main>
    );
  }


}

export default Playlists;
