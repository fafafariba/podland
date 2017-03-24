import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

let subscriptions = <p>No subscriptions... yet...</p>;

class SubscriptionsAll extends React.Component {
  constructor(props){
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.playHandler = this.playHandler.bind(this);
  }

  componentDidMount(){
    this.props.fetchSubscriptions();
  }

  deleteHandler(id){
    this.props.deleteSubscription(id);
  }

  playHandler(audio, id){
    this.props.receiveAudio(audio);
    this.props.router.push(`/podcasts/${id}`);
  }

  render() {
    if (this.props.subscriptions) {
      subscriptions = this.props.subscriptions.map((podcast, idx) => (
        <li key={podcast+idx}>
          <ul className="podcast-container">
            <li>
              <div className="subscriptions-podcast-img"
                style={podcastStyle(podcast.image_url)}>
                <ul className="subscriptions-podcast-overlay">
                  <li>
                    <i className="fa fa-play-circle"
                      onClick={ () => this.playHandler(podcast.episodes, podcast.id) }
                      aria-hidden="true" title="Play Latest Episode"></i>
                  </li>
                  <li>
                    <i className="fa fa-times-circle"
                        onClick={ () => this.deleteHandler(podcast.subscription_id) }
                          aria-hidden="true" title="Unsubscribe">
                    </i>
                  </li>
                </ul>
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
    }

    return (
      <main className="subscriptions">
        <header className="subscriptions-header">
          <h2>My Subscriptions</h2>
        </header>
        <section className="podcasts">
          <ul>
            { subscriptions }
          </ul>
        </section>
      </main>
    );
  }
}


export default SubscriptionsAll;
