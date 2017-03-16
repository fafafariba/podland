import React from 'react';
// import SettingsMenu from './settings_menu';
import onClickOutside from 'react-onclickoutside';

class MainNav extends React.Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { menuOpen: false};
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

  // componentDidUpdate(){
  //   console.log("updated");
  //   this.redirect();
  // }

  // redirect(){
  //   console.log(this.props.currentUser, "user");
  //   if (!this.props.currentUser) this.props.router.push("/");
  // }

  render(){
    let menu;
    if (this.state.menuOpen) {
      menu = <nav className="settings-menu">
        <ul>
          <li><a href="https://github.com/fafafariba/podland">About</a></li>
          <li><a href="#" onClick={this.logout}>Logout</a></li>
        </ul>;
      </nav>;
    } else {
      menu = <div></div>;
    }
    return (
      <main className="main-nav">
        <h1>Podland</h1>
        <ul>
          <li></li>
          <li>
            <p>
              Welcome,
            </p>
            </li>
          <li>
            <a href="#" onClick={this.toggleMenu}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        { menu }
      </main>
    );
  }
}

export default onClickOutside(MainNav);
