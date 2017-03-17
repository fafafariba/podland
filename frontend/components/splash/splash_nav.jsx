import React from 'react';
const Modal = require('react-modal');
import SessionFormContainer from '../session/session_form_container';
import modalStyle from './modal_style';

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
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={modalStyle}
          contentLabel="auth">
          <div className= "modal">
            <SessionFormContainer
              formType={this.state.login ? "login" : "newUser"}/>
            <button onClick={this.onModalClose} id="outer-modal-button">close</button>
            </div>
        </Modal>
      </nav>
    );
  }
}

export default SplashNav;
