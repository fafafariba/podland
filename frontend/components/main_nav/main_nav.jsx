import React from 'react';
// import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router';
import SettingsMenu from './settings_menu';

class MainNav extends React.Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { menuOpen: false };
  }

  // handleClickOutside() {
  //   event.preventDefault();
  //   if (this.state.menuOpen) this.toggleMenu();
  // }

  toggleMenu(){
    this.setState({ menuOpen: !this.state.menuOpen});
  }

  componentDidUpdate(){
    this.redirect();
  }
  redirect(){
    if (!this.props.currentUser) this.props.router.replace("/welcome");
  }

  render(){
    let name, menu;

    name = this.props.currentUser ? this.props.currentUser.name : "";

    if (this.state.menuOpen) {
      menu = <SettingsMenu state={this.state.menuOpen} logout={this.props.logout}/>;
    } else {
      menu = <div></div>;
    }

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

export default MainNav;
// export default onClickOutside(MainNav);
