import React from 'react';
const Modal = require('react-modal');
import SessionFormContainer from '../session/session_form_container';

class SplashNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { modalOpen: false, login: true };
    this.onModalClose = this.onModalClose.bind(this);
  }

  clickHandler(loginBool){
    this.setState({ modalOpen: true, login: loginBool });
  }

  onModalClose() {
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }

  //TODO: Does this help?
  componentWillReceiveProps(){
    if (this.props.currentUser) this.setState({modalOpen: false});
  }

  render(){
    return(
      <nav className="splash-nav">
        <h1>Podland</h1>
        <ul className="splash-nav-buttons">
          <li>
            <button onClick={this.clickHandler.bind(this, false)}>Sign Up</button>
          </li>
          <li>
            <button onClick={this.clickHandler.bind(this, true)}>Login</button>
          </li>
        </ul>

        <Modal
          className="splash-nav-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          contentLabel="auth">
            <SessionFormContainer
              formType={this.state.login ? "login" : "newUser"}/>
            <a href="#" onClick={this.onModalClose}>close</a>
        </Modal>
      </nav>
    );
  }
}

export default SplashNav;
