import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let player = null;
    if (this.props.audio.length > 0) {
      const playlist = this.props.audio.map(track => (
        { url: track.audio_url,
          displayText: `No. ${track.no} ${track.name}` }
      ));
      player = (
        <nav>
          <div className="audioPlayer">
            <AudioPlayer playlist={playlist}
              hideBackSkip={false}
              autoplay={true} />
          </div>
        </nav>
      );
    }

    return (
      <div>
        { player }
      </div>
    );
  }
}

export default Footer;
