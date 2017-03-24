import React from 'react';

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  render(){
    return (
      <main >
        <input value=""></input>
      </main>
    );
  }
}

export default Playlists;
