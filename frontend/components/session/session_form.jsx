import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: "", image_url: ""};
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(){

  }

  submitHandler(){

  }

  render(){
    <div>
      <form onSubmit={this.submitHandler}>
        inputHandler
      </form>
    </div>
  }

}
