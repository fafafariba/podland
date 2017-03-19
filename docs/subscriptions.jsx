import React from 'react';
import { Link } from 'react-router';




class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    let subscriptions = <p>No subscriptions yet.</p>;

    if (this.props.subscriptions) {
      const subs = this.props.subscriptions.slice(0,10);
      subscriptions = subs.map((sub, idx) => (
          <li className="carousel-cell" key={"sub"+idx} >
            <Link to={ `/podcasts/${this.props.subscriptions.id}` }>
              <img src={this.props.subscriptions.image_url}/>
            </Link>
            <p>{this.props.subscriptions.name}</p>
          </li>
      ));
    }

    return (
      <section>
        <ul>
          <li>
            { subscriptions }
          </li>
        </ul>
      </section>
    );
  }
}


export default Subscriptions;
