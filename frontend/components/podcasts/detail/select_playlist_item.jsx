import React from 'react';
import onClickOutside from 'react-onclickoutside';

class SelectPlaylistItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { names: null, direction: "down", playlistId: null, episodeId: this.props.episodeId };
    this.toggleChevron = this.toggleChevron.bind(this);
    this.playlistIdHandler = this.playlistIdHandler.bind(this);
  }

  // componentDidMount(){
  //   if (this.props.playlists.length) {
  //     let playlistNames = this.props.playlists.map(playlist => (
  //
  //     ));
  //     this.setState({names: playlistNames});
  //   }
  // }

  playlistIdHandler(id){
    this.setState({playlistId: id});
  }

  addToPlaylistHandler(track) {

  }

  handleClickOutside () {
    event.preventDefault();
    if (this.state.direction === "up") this.toggleChevron() ;
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

    if (this.state.names && this.state.direction === "up") {
        list = this.state.names.map( (name, idx) => (
          <li key={playlist+idx}
            onClick={ () => this.playlistHandler(playlist.id) } >
            <p>{ name }</p>
          </li>
        ));
      debugger;
    }

    return (
      <div className="modal-drop-down">
        <ul>
          <li className="drop-down-chevron"><i className={`fa fa-chevron-${this.state.direction}`}
            aria-hidden="true" onClick={ () => this.toggleChevron() }></i>
          </li>
          { list }
          </ul>
      </div>
    );
  }
}

export default onClickOutside(SelectPlaylistItem);
