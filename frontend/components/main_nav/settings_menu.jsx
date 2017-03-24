import React from 'react';
// import onClickOutside from 'react-onclickoutside';


class SettingsMenu extends React.Component{
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  // handleClickOutside() {
  //   event.preventDefault();
  //   if (this.props.state) this.toggleMenu();
  // }

  logout(){
    this.props.logout();
  }

  render(){
    return (
      <nav className="settings-menu">
        <ul>
          <li><a href="https://github.com/fafafariba/podland">About</a></li>
          <li><a href="" onClick={this.logout}>Logout</a></li>
        </ul>
      </nav>
    );
  }
}

export default SettingsMenu;
// export default onClickOutside(SettingsMenu);
