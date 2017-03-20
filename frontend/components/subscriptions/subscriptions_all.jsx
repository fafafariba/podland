import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

let subscriptions = <p>No subscriptions...yet...</p>;

class SubscriptionsAll extends React.Component {
  constructor(props){
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentWillMount(){
    this.props.fetchSubscriptions();
  }

  //TODO: HELP!!!! This run on load. WHY??????
  deleteHandler(id){
    this.props.removeSubscription(id);
  }

  playHandler(){
    //for player
  }

  render() {
    if (this.props.subscriptions.length > 0) {
      subscriptions = this.props.subscriptions.map((podcast, idx) => (
        <li key={podcast+idx}>
          <ul className="podcast-container">
            <li>
              <div className="subscriptions-podcast-img"
                style={podcastStyle(podcast.image_url)}>
                <ul className="subscriptions-podcast-overlay">
                  <li>
                    <i className="fa fa-play-circle"
                      onClick={ () => this.playHandler(podcast.episode.id) }
                      aria-hidden="true" title="Play Latest Episode"></i>
                  </li>
                  <li>
                    <i className="fa fa-minus-circle"
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
