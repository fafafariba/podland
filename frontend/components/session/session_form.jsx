import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: "", image_url: ""};
    this.submitHandler = this.submitHandler.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  inputHandler(field){
    return event => this.setState({[field]: event.currentTarget.value});
  }

  submitHandler(){
    event.preventDefault();
    if (this.props.formType === "login") {
      this.props.login(this.state);
    } else {
      this.props.newUser(this.state);
    }
    if (this.props.currentUser) this.redirect();
  }

  componentDidUpdate(){
    if (this.props.currentUser) this.redirect();

  }

  // resetState() {
  //   console.log("reset");
  //   this.setState({name: "", email: "", password: "", image_url: ""});
  // }

  redirect(){
    this.props.router.push("/");
  }

  render(){

    let name, image_url, displayErrors;

    let header = "Login";

    if (this.props.formType==="newUser") {
      header = "Sign Up";
      name = <div>
              <label><p>Name</p>
                <input type="text" onChange={this.inputHandler("name")}/>
              </label>
              <br/>
            </div>;
      image_url = <label> Image
        <input type="text" onChange={this.inputHandler("image_url")}/>
        </label>;
    }
    const errors = this.props.errors.map((error,idx) =>(
        <li key={error+idx}>{error}</li>
    ));
    if (errors) displayErrors = <ul className="errors">{errors}</ul>;


    return (
      <div className="splash-nav-modal-form">
        <h2>{header}</h2>
        <br/>
        {displayErrors}
        <form onSubmit={this.submitHandler}>
          {name}
          <label>
            <p>Email</p>
            <input type="text" onChange={this.inputHandler("email").bind(this)}
              value={this.state.email}/>
          </label>
          <br/>
          <label>
            <p>Password</p>
            <input type="password" onChange={this.inputHandler("password").bind(this)}
              value={this.state.password}/>
          </label>
          <br/>
          <input type="submit" id="splash-nav-modal-button" />
        </form>
        <br/>
      </div>
    );
  }

}

export default SessionForm;
