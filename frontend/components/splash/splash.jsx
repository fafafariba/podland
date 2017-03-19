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
            <span className="border">SCROLL DOWN</span>
          </div>
        </div>

        <div className="title">
          <h3>Podland</h3>
          <p>where podcasts live</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">LESS HEIGHT</span>
          </div>
        </div>

        <div>
          <div className="text1">
            <p>Keep track of your favorite shows</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">SCROLL UP</span>
          </div>
        </div>

        <div>
          <div className="text2">
            <p>Create custom playlists</p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="border">Try it now</span>
          </div>
        </div>



      </main>
    );
  }
}

export default Splash;
