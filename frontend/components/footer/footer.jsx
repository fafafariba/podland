import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import isEqual from 'lodash/isEqual';





class Footer extends React.Component {
  constructor(props){
    super(props);
    if (this.props.audio.length > 0) {
      let list = this.extractPlaylist(this.props.audio);
      this.state = {list };
    } else {
      this.state = { list: [] };
    }
    this.audioPlayer = this.audioPlayer;
  }


  componentWillReceiveProps(nextProps){
    if (this.audioPlayer)
    console.log(this.audioPlayer);
    if (nextProps.audio.length && !isEqual(this.props.audio, nextProps.audio)) {
      console.log("props not equal");
      setTimeout(() => {
        this.audioPlayer.togglePause();
      }, 3000);
      let list = this.extractPlaylist(nextProps.audio);
      this.setState({list});
    }
  }

  // componentDidUpdate(){
  //   console.log("didupdate");
  //   // this.audioPlayer.togglePause();
  // }

  extractPlaylist(audio) {
    return audio.map(track => (
      { url: track.audio_url,
        displayText: `No. ${track.no} ${track.name}` }
    ));
  }

  render(){

    let player = <div></div>;

    if (this.state.list.length) {
      console.log("definingPlayer");
      player = (
        <AudioPlayer playlist={this.state.list}
          hideBackSkip={false}
          ref={(input) => { this.audioPlayer = input; }} />
      );
    }
    console.log(this.audioPlayer);
    // let player = <div></div>;
      // console.log("player", this.audioPlayer);
      // setTimeout(() => {
      //   this.audioPlayer.togglePause();
      // }, 5000);


    return (
      <div>
        <nav>
          <div className="audioPlayer">
            { player }
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
