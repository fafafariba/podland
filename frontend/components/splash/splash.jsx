import React from 'react';
const Modal = require('react-modal');
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = { modalOpen: false, login: true };
    this.onModalClose = this.onModalClose.bind(this);
  }

  clickHandler(loginBool){
    this.setState({ modalOpen: true, login: loginBool });
  }

  onModalClose() {
    console.log("inside close");
    this.setState({ modalOpen: false });
  }

  render(){
    return(
      <div>
        <button className="splash-nav" onClick={this.clickHandler
            .bind(this, false)}>Sign Up</button>
        <button className="splash-nav" onClick={this.clickHandler
            .bind(this, true)}>Login</button>

        <Modal
          className="splash-nav"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          contentLabel="auth">
            <SessionFormContainer
              formType={this.state.login ? "login" : "newUser"}/>
          <button onClick={this.onModalClose}>close</button>
        </Modal>
      </div>
    );
  }
}

export default Splash;
