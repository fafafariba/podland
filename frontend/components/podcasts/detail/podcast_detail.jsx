import React from 'react';
import { Link } from 'react-router';

class PodcastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscribed: "", button: "" , subscriptionId: ""};
    this.subscriptionsHandler = this.subscriptionsHandler.bind(this);
  }

  setSubscribed(subs){
    let {podcast} = this.props;
    let subscription = Object.values(subs).find(sub => sub.id === podcast.id);
    let subscribed = Boolean(subscription);
    if (subscribed) {
      this.setState({ subscribed: true, button: "Unsubscribe", subscriptionId: subscription.subscription_id });
    } else {
      this.setState({ subscribed: false, button: "Subscribe", subscriptionId: null });
    }

  }

  componentDidMount(){
    this.props.fetchPodcast(this.props.params.podcastId);
    this.props.fetchSubscriptions();

    if (this.props.podcast.length) {
      this.setSubscribed(this.props.subscriptions);
    }
  }

  componentWillReceiveProps(nextProps){
    if (Object.keys(nextProps.podcast).length) {
      this.setSubscribed(nextProps.subscriptions);
    }
  }

  playerHandler(){
    //start playlist with all podcasts
  }

  subscriptionsHandler(){
    event.preventDefault();
    if (this.state.subscribed) {
      this.props.deleteSubscription(this.state.subscriptionId);
    } else {
      this.props.addSubscription(this.props.podcast.id);
    }
  }

  externalHandler(){

  }

  render () {
    let latest, rest;

    if (this.props.podcast.episodes) {
      const episodes = this.props.podcast.episodes;
      latest = episodes[0];
      rest = episodes.slice(1);
      // console.log("latest", latest);
      // console.log("rest", rest);
    }

    let latestContent;

    if (latest) {
      latestContent =
      <section className="latest-episode">
        <ul>
          <li>
            <h4>No. {latest.no} {latest.name} {latest.duration}</h4>
            <p>{latest.description}</p>
            <div className="latest-row-buttons">
              <ul>
                <li><i className="fa fa-play" aria-hidden="true"
                  title="Play"></i></li>
                <li><i id="plus" className="fa fa-plus" aria-hidden="true"
                  title="Add to Playlist"></i></li>
              </ul>
            </div>
          </li>
          <li>
            <img className="thumb" src={latest.image_url} />
          </li>
        </ul>
      </section>;
    }

    return (
      <main className="podcast-detail">
        <header className="podcast-detail-header">
          <h2>{this.props.podcast.name}</h2>
        </header>
          <section className="profile">
            <ul>
              <li>
                <img src={this.props.podcast.image_url}/>
              </li>
              <li className="buttons-descriptions">
                <ul>
                  <li>
                    <p className="description">{this.props.podcast.description}</p>
                  </li>
                  <li className="row-buttons">
                    <ul>
                      <li><i className="fa fa-play" aria-hidden="true"
                        title="Play Podcast Radio"></i></li>
                      <li><button className="subscribe-button"
                        onClick={()=>this.subscriptionsHandler()}>
                        {this.state.button}</button></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        <header className="podcast-detail-header">
          <h3>Latest Episode</h3>
        </header>
          {latestContent}
        <header className="podcast-detail-header">
          <h3>All Episodes</h3>
        </header>
      </main>
    );
  }
}


export default PodcastDetail;
