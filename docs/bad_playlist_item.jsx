import React from 'react';
import onClickOutside from 'react-onclickoutside';


class PlaylistItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { direction: "down" };
    this.toggleChevron = this.toggleChevron.bind(this);
    // this.createListHandler = this.createListHandler.bind(this);
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

  playlistHandler(id){

  }

  render() {
    console.log("playlistsprops", this.props.playlists);

    let list;

    if (this.props.playlists.length > 0 && this.state.direction === "up") {
        list = this.props.playlists.map( (playlist, idx) => (
          <li key={playlist+idx}
            onClick={ () => this.playlistHandler(playlist.id) } >
            <p>{ playlist.name }</p>
          </li>
        ));
        } else {
      list = <div></div>;
    }

    return (
      <div>
        <ul>
          <li className="drop-down"><i className={`fa fa-chevron-${this.state.direction}`}
            aria-hidden="true" onClick={ () => this.toggleChevron() }></i>
          </li>
          { list }
          </ul>
      </div>
    );
  }
}

export default onClickOutside(PlaylistItem);

// <li key={playlist[1]+idx}
//   onClick={ () => this.playlistHandler(playlist[0]) } >
//   {playlist[1]}
// </li>
