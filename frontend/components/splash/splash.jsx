import React from 'react';
import ParallaxComponent from 'react-parallax-component';


class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log("in splash");
    return(
      <main className="splash-page">
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">PODLAND</span>
          </div>
        </div>

        <div className="blurb-1">
          <p>Where podcasts live</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">DISCOVER</span>
          </div>
        </div>

        <div>
          <div className="blurb-2">
            <p>Explore new shows</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">CREATE</span>
          </div>
        </div>

        <div>
          <div className="blurb-3">
            <p>Make your own playlists</p>
          </div>
        </div>

        <div className="bgimg-4">
          <div className="caption">
            <span className="border">FOLLOW</span>
          </div>
        </div>

        <div>
          <div className="blurb-4">
            <p>Track your favorites</p>
          </div>
        </div>

        <div className="bgimg-5">
          <a className="try-button" href="#">
            <div className="caption">
            <span className="border">try it now</span>
          </div></a>
        </div>



      </main>
    );
  }
}

export default Splash;
