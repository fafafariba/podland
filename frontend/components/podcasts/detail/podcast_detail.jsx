import React from 'react';
import { Link } from 'react-router';

class PodcastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscribed: "", button: "" , subscriptionId: ""};
    this.subHandler = this.subHandler.bind(this);
  }

  setSubscribed(subs){
    let {podcast} = this.props;
    let subscription = Object.values(subs).find(sub => sub.id === podcast.id);
    console.log(subscription);
    let subscribed = Boolean(subscription);
    if (subscribed) {
      console.log("setting subscription ID");
      this.setState({ subscribed: true, button: "Unsubscribe", subscriptionId: subscription.subscription_id });
    } else {
      console.log(("not setting ID"));
      this.setState({ subscribed: false, button: "Subscribe", subscriptionId: null });
    }

  }

  componentDidMount(){
    console.log("did mount");
    this.props.fetchPodcast(this.props.params.podcastId);
    this.props.fetchSubscriptions();

    if (this.props.podcast.length) {
      this.setSubscribed(this.props.subscriptions);
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("props changed");
    if (Object.keys(nextProps.podcast).length) {
      this.setSubscribed(nextProps.subscriptions);
    }
  }

  // toggleSubscribe(){
  //   this.setState({ subscribed: !this.state.subscribed});
  // }

  playerHandler(){
    //start playlist with all podcasts
  }

  subHandler(){
    console.log(this.state);
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
      <section className="latest-pd">
        <ul>
          <li>
            <h4>No. {latest.no} {latest.name} {latest.duration}</h4>
            <p>{latest.description}</p>
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
                <img src={this.props.podcast.image_url} onClick={()=>console.log(this.state)}/>
              </li>
              <li className="buttons-descriptions">
                <ul>
                  <li>
                    <p className="description">{this.props.podcast.description}</p>
                  </li>
                  <li className="row-buttons">
                    <ul>
                      <li><i className="fa fa-play" aria-hidden="true" title="Play Podcast Radio"></i></li>
                      <li><button className="subscribe-button" onClick={()=>this.subHandler()}>
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
