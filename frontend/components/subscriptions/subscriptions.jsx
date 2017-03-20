import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

let subscriptions = <p>No subscriptions...yet</p>;

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchSubscriptions();
  }

  playHandler(){
    //for player
  }

  render() {

    console.log(this.props, "subs");
    if (this.props.subscriptions) {
      let first8Subs = this.props.subscriptions.slice(0,10);
      first8Subs= first8Subs.map((podcast, idx) => (
        <li key={podcast+idx}>
          <ul className="podcast-container">
            <li>
                <div className="podcast-img" style={podcastStyle(podcast.image_url)}>
                <div className="podcast-overlay">
                  <a href="#" title="Play Latest Episode">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="podcast-link">
                <Link to={`/podcasts/${podcast.id}`}>{podcast.name}</Link>
              </div>
            </li>
          </ul>
        </li>
      ));
      subscriptions = first8Subs;
    }

    return (
      <section>
        <div className="home-header">
          <ul>
            <li>
              <h2>My Subscriptions</h2>
            </li>
            <li>
              <Link to="/subscriptions">More</Link>
            </li>
          </ul>
        </div>
        <section className="podcasts">
          <ul>
            { subscriptions }
          </ul>
        </section>
      </section>
    );
  }
}


export default Subscriptions;
