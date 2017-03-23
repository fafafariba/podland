import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import isEqual from 'lodash/isEqual';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = { list: [] };
  }

  componentWillMount(){
    console.log("componentWillMount");
    if (this.props.audio.length > 0) {
      let list = this.extractPlaylist(this.props.audio);
      this.state = {list};
    }
  }

  componentDidUpdate(){

  }

  componentWillReceiveProps(nextProps){
    console.log("will receive props");
    if (this.state.list !==[]) {
      console.log("state not []");
    }
    if (this.props.audio.length && !isEqual(this.props.audio, nextProps.audio)) {
      console.log("props not equal");
      this.audioPlayer.togglePause();
      let list = this.extractPlaylist(nextProps.audio);
      this.setState({list});
    }
  }

  componentDidUpdate(){
    console.log("didupdate");
    this.audioPlayer.togglePause();
  }

  extractPlaylist(audio){
    return audio.map(track => (
      { url: track.audio_url,
        displayText: `No. ${track.no} ${track.name}` }
    ));
  }

  render(){

    let player = <div></div>;
    console.log("props", this.props.audio);
    console.log("state", this.state.list);
    if (this.state.list.length) {
      player = (
        <nav>
          <div className="audioPlayer">
            <AudioPlayer playlist={this.state.list}
              hideBackSkip={false}
              ref={(input) => { this.audioPlayer = input; }} />
          </div>
        </nav>
      );
      console.log("player", this.audioPlayer);
      // setTimeout(() => {
      //   this.audioPlayer.togglePause();
      // }, 5000);
    }

    return (
      <div>
        {player}
      </div>
    );
  }
}

export default Footer;
