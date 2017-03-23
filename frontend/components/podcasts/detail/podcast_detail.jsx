import React from 'react';
import { Link } from 'react-router';
import EpisodeTrack from './episode_track';

class PodcastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscribed: "", button: "" , subscriptionId: ""};
    this.subscriptionsHandler = this.subscriptionsHandler.bind(this);
    this.playHandler = this.playHandler.bind(this);
  }

  setSubscribed(subs){
    let {podcast} = this.props;
    let subscription = Object.values(subs).find(sub => sub.id === podcast.id);
    let subscribed = Boolean(subscription);
    if (subscribed) {
      this.setState({ subscribed: true, button: "Unsubscribe",
        subscriptionId: subscription.subscription_id });
    } else {
      this.setState({ subscribed: false, button: "Subscribe",
        subscriptionId: null });
    }

  }

  componentDidMount(){
    this.props.fetchPodcast(this.props.params.podcastId);
    this.props.fetchSubscriptions();
    this.props.fetchPlaylists();

    if (this.props.podcast.length) {
      this.setSubscribed(this.props.subscriptions);
    }
  }

  componentWillReceiveProps(nextProps){
    if (Object.keys(nextProps.podcast).length) {
      this.setSubscribed(nextProps.subscriptions);
    }
  }

  playHandler(audio){
    this.props.receiveAudio(audio);
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

    let episodes = this.props.podcast.episodes;

    if (episodes) {
      latest = episodes[0];
      rest = episodes.slice(1);
    }

    let latestContent, episodeContent;

    if (latest) {
      let episodeImage = <div></div>;

        if (latest.image_url) {
          episodeImage = <img className="thumb" src={latest.image_url} />;
        }
      latestContent =
      <section className="latest-episode">
        <ul>
          <li>
            <h4>No. {latest.no} {latest.name}</h4>
            <p>{latest.duration} </p>
            <p>{latest.description}</p>
            <div className="latest-row-buttons">
              <ul>
                <li><i className="fa fa-play" aria-hidden="true"
                  title="Play Episode"
                  onClick={ ()=>this.playHandler([latest]) }></i></li>
                <li><i id="plus" className="fa fa-plus" aria-hidden="true"
                  title="Add to Playlist"></i></li>
              </ul>
            </div>
          </li>
          <li>
            { episodeImage }
          </li>
        </ul>
      </section>;
    }

    if (rest) {
      episodeContent = rest.map((episode, idx) => (
        <EpisodeTrack episode={episode} receiveAudio={this.props.receiveAudio}
          playlists={this.props.playlists} key={episode+idx}/>
      ));
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
                    <p className="description">
                      {this.props.podcast.description}</p>
                  </li>
                  <li className="row-buttons">
                    <ul>
                      <li><i className="fa fa-play" aria-hidden="true"
                        title="Play Podcast Radio"
                        onClick={ ()=> this.playHandler(this.props.podcast.episodes) }></i></li>
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
        <section className="all-episodes">
          {episodeContent}
        </section>
      </main>
    );
  }
}


export default PodcastDetail;
