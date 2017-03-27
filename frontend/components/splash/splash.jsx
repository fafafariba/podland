import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(){
    event.preventDefault();
    this.props.login({email: "guest@guest.com", password: "beourguest" });
  }

  componentDidUpdate(){
    if (this.props.currentUser) this.redirect();

  }

  redirect(){
    this.props.router.push("/");
  }

  render(){
    return(
      <main className="splash-page">
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">PODLAND</span>
          </div>
        </div>

        <div className="blurb-1">
          <p id="blurb">Where podcasts live</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">DISCOVER</span>
          </div>
        </div>

        <div>
          <div className="blurb-2">
            <p id="blurb">Explore new shows</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">CREATE</span>
          </div>
        </div>

        <div>
          <div className="blurb-3">
            <p id="blurb">Make your own playlists</p>
          </div>
        </div>

        <div className="bgimg-4">
          <div className="caption">
            <span className="border">FOLLOW</span>
          </div>
        </div>

        <div>
          <div className="blurb-4">
            <p id="blurb">Track your favorites</p>
          </div>
        </div>

        <div className="bgimg-5">
          <div className="caption">
            <a className="try-button" href="#">
            <span className="border" onClick={()=>this.guestLogin()}>TRY IT NOW</span>
            </a>
          </div>
        </div>



      </main>
    );
  }
}

export default Splash;
