import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router';

class MainNav extends React.Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { menuOpen: false };
    this.logout = this.logout.bind(this);
  }

  handleClickOutside() {
    event.preventDefault();
    if (this.state.menuOpen) this.toggleMenu();
  }

  toggleMenu(){
    this.setState({ menuOpen: !this.state.menuOpen});
  }

  logout(){
    this.props.logout();
  }

  componentDidUpdate(){
    this.redirect();
  }
  redirect(){
    if (!this.props.currentUser) this.props.router.replace("/welcome");
  }

  render(){
    let menu, name;
    if (this.state.menuOpen) {
      menu =
      <nav className="settings-menu">
        <ul>
          <li><a href="https://github.com/fafafariba/podland">About</a></li>
          <li><a href="#" onClick={this.logout}>Logout</a></li>
        </ul>
      </nav>;
    } else {
      menu = <div></div>;
    }

    name = this.props.currentUser ? this.props.currentUser.name : "";


    return (
      <div>
        <header className="main-nav">
          <nav className="left-nav">
            <Link to="/"><h1>Podland</h1></Link>
          </nav>
          <nav className="right-nav">
            <ul>
              <li id="headphones"><i className="fa fa-headphones" aria-hidden="true"></i></li>
              <li>Welcome, { name }</li>
              <li id="navicon">
                <i className="fa fa-bars" aria-hidden="true" onClick={this.toggleMenu}></i>
                { menu }
              </li>
            </ul>
          </nav>
        </header>
          <nav className="sub-nav">
            <ul>
              <li><Link to="/"><h4>Home</h4></Link></li>
              <li><Link to="/subscriptions"><h4>Subscriptions</h4></Link></li>
              <li><Link to="/playlists"><h4>Playlists</h4></Link></li>
              <li><Link to="/podcasts"><h4>Explore</h4></Link></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default onClickOutside(MainNav);
