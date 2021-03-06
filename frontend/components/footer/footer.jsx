import React from 'react';
import ReactPlayer from 'react-player';
import isEqual from 'lodash/isEqual';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = { current: "", queue: "", playing: false};

    this.togglePlay = this.togglePlay.bind(this);
    this.backHandler = this.backHandler.bind(this);
    this.forwardHandler = this.forwardHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.audio.length > 0 && this.props.currentUser) {
      const queue = this.extractPlaylist(this.props.audio);
      this.setState({queue, playing: true, current: queue[0] });
    }
    window.addEventListener("keydown", event => {
      if (event.key === " ") {
        event.preventDefault();
        this.togglePlay();
      }
    });
    window.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") {
        this.backHandler();
      }
    });
    window.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") {
        this.forwardHandler();
      }
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.audio.length > 0 && !isEqual(this.props.audio, nextProps.audio) &&
        this.props.currentUser) {
      const queue = this.extractPlaylist(nextProps.audio);
      this.setState({ queue, playing: true, current: queue[0] });
    }
  }

  extractPlaylist(audio) {
    return audio.map((track, idx) => {
      let title = `No. ${track.no}`;
      if (!track.no) {
        title = "";
      }
      return {
        url: track.audio_url,
        cover: track.podcast_thumb_url,
        title: `${title} ${track.name}`,
        position: idx
      };
    });
  }

  togglePlay(event) {
    if (this.state.current) {
      this.state.playing ? this.pauseTrack() : this.playTrack();
    }
  }

  playTrack(){
    this.setState({playing: true});
  }

  pauseTrack(){
    this.setState({playing: false});
  }

  backHandler(event) {
    const index = this.state.current.position - 1;
    if (index > -1 ) {
      this.setState({current: this.state.queue[index]});
    } else {
      let lastIndex = this.state.queue.length-1;
      this.setState({current: this.state.queue[lastIndex]});
    }
    this.playTrack();
  }

  forwardHandler(event) {
    const index = this.state.current.position + 1;
    if (this.state.queue[index]) {
      this.setState({current: this.state.queue[index]});
    } else {
      this.setState({current: this.state.queue[0]});
    }
    this.playTrack();
  }

  render(){


    let player, trackInfo, image, button, loadBar, time;

    if (this.state.current) {
      player = (
        <div className="audio-player-container">
          <ReactPlayer
            url={this.state.current.url}
            playing={this.state.playing}
            hidden={false}
            width={0}
            height={0}
            onPlay={ () => this.setState({playing: true}) }
            onPause={ () => this.setState({playing: false}) }
            onEnded={ () => this.setState({playing: false}) }/>
        </div>);

       trackInfo =(
          <div className="audio-info-marquee">
            <p className="audio-info">{this.state.current.title}</p>
          </div>
          );

        image= <img src={this.state.current.cover} alt="podcast"/>;

        time=(
          <div className="time-progress">
          </div>
        );

    } else {
      player = <div></div>;
      trackInfo= <div></div>;
      image = <div></div>;

    }

    const toRenderOnLoad = (
      <nav className="audio-player">
        {player}
        <ul>
          <li>
            {image}
          </li>
          <li>
            <div className="play-controls">
              <i className="fa fa-backward"
                onClick={this.backHandler} aria-hidden="true"></i>
              <i className={`fa fa-${this.state.playing ? "pause" : "play"}`}
                onClick={this.togglePlay} aria-hidden="true"></i>
              <i className="fa fa-forward"
                onClick={this.forwardHandler} aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <ul>
              <li>{trackInfo}</li>
            </ul>
          </li>
        </ul>
      </nav>
    );

    return (
      <div>
        {this.state.current ? toRenderOnLoad : <div></div>}
      </div>
    );
  }

}

export default Footer;
