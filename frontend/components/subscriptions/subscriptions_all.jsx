import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

let subscriptions = <p>No subscriptions...yet</p>;

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
    return ()=> this.props.removeSubscription(id);
  }

  playHandler(){
    //for player
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
                    <a href="#" title="Play Latest Episode"
                      onClick={this.playHandler(podcast.episode.id)}>
                      <i className="fa fa-play-circle"
                        aria-hidden="true"></i>
                      </a>
                  </li>
                  <li>
                    <a href="#" title="Unsubscribe"
                      onClick={this.deleteHandler(podcast.subscription_id)}>
                        <i className="fa fa-minus-circle"
                          aria-hidden="true"></i>
                    </a>
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
