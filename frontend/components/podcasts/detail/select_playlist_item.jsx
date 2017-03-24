import React from 'react';
import onClickOutside from 'react-onclickoutside';

class SelectPlaylistItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { names: null, direction: "down", playlistId: null };
    this.toggleChevron = this.toggleChevron.bind(this);
    this.addToPlaylistHandler = this.addToPlaylistHandler.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }


  addToPlaylistHandler(playlistId) {
    this.props.clearMessages();
    this.toggleChevron();
    this.props.addTrack(playlistId, this.props.episodeId);
  }

  handleClickOutside () {
    event.preventDefault();
    if (this.state.direction === "up") {
      this.props.clearMessages();
      this.toggleChevron();
    }
  }

  toggleChevron(){
    if (this.state.direction === "down") {
      this.setState({ direction: "up" });
    } else {
      this.setState({ direction: "down"});
    }
  }

  render() {
    let list = <div></div>;

    if (this.props.playlists && this.state.direction === "up") {
        list = this.props.playlists.map( (playlist, idx) => (
          <li key={playlist+idx} className
            onClick={ () => this.addToPlaylistHandler(playlist.id) } >
            <p>{ playlist.name }</p>
          </li>
        ));
    }

    return (
      <div className="select-playlist-items">
        <ul>
          <li id="drop-down-chevron"><i className={`fa fa-chevron-${this.state.direction}`}
            aria-hidden="true" onClick={ () => this.toggleChevron() }></i>
          </li>
            <ul className="modal-drop-down">
              { list }
            </ul>
          </ul>
      </div>
    );
  }
}

export default onClickOutside(SelectPlaylistItem);
