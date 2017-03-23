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

  handleClickOutside () {
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
      <header className="main-nav">
        <nav className="left-nav">
          <Link to="/"><h1>Podland</h1></Link>
        </nav>
        <nav className="right-nav">
          <ul>
            <li><i className="fa fa-headphones" aria-hidden="true"></i></li>
            <li>Welcome, { name }</li>
            <li id="navicon">
              <i className="fa fa-bars" aria-hidden="true" onClick={this.toggleMenu}></i>
              {menu}
            </li>
      </ul>
      </nav>
    </header>
    );
  }
}

export default onClickOutside(MainNav);
