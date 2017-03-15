import React from 'react';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: "", image_url: ""};
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(field){
    return event => this.setState({[field]: event.target.value});
  }

  submitHandler(){
    if (this.props.formType === "login") {
      this.props.login(this.state);
    } else {
      this.props.signup(this.state);
    }
    this.setState({name: "", email: "", password: "", image_url: ""});
    this.redirect();
  }

  //TODO: Persisting errors array?
  //TODO: Best way to redirect?
  redirect(){
    if (this.props.currentUser) hashHistory.push("/");
  }

  render(){

    let name, image_url, displayErrors;

    let header = "Login";

    if (this.props.formType==="newUser") {
      console.log("newUser");
      header = "Sign Up";
      name = <label> Name
        <input type="text" onChange={this.inputHandler("name")}/>
        </label>;
      image_url = <label> Image
        <input type="text" onChange={this.inputHandler("image_url")}/>
        </label>;
    }
    const errors = this.props.errors.map((error,idx) =>(
        <li key={error+idx}>{error}</li>
    ));
    if (errors) displayErrors = <ul className="errors">{errors}</ul>;


    return (
      <div>
        <h1>{header}</h1>
        {displayErrors}
        <form onSubmit={this.submitHandler}>
          {name}
          <label>
            Email
            <input type="text" onChange={this.inputHandler("email")} />
          </label>
          <label>
            Password
            <input type="password" onChange={this.inputHandler("password")} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default SessionForm;
