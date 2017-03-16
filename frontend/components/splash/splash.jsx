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
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }


  render(){
    console.log("in splash");
    return(
      <main className="splash-page">
        <h1>Pretty images go here.</h1>
      </main>
    );
  }
}

export default Splash;
