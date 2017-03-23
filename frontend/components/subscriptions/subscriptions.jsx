import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

let subscriptions = <p>No subscriptions...yet...</p>;

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
  }

  playHandler(audio, id){
    this.props.receiveAudio(audio);
    this.props.router.push(`/podcasts/${id}`);
  }

  render() {

    if (this.props.subscriptions.length > 0) {
      let first8Subs = this.props.subscriptions.slice(0,10);
      first8Subs= first8Subs.map((podcast, idx) => (
        <li key={podcast+idx}>
          <ul className="podcast-container">
            <li>
              <div className="podcast-img" style={podcastStyle(podcast.image_url)}>
                <div className="podcast-overlay">
                  <i className="fa fa-play-circle" aria-hidden="true"
                     title="Play Latest Episode"
                     onClick={ () => this.playHandler(podcast.episodes, podcast.id) }>
                  </i>
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
