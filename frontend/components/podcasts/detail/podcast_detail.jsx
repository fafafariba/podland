import React from 'react';
import { Link } from 'react-router';

class PodcastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscribed: "", button: "" };
  }

  componentDidMount(){
    this.props.fetchPodcast(this.props.params.podcastId);
    this.props.fetchSubscriptions();

    if (this.props.podcast.length) {
      if (this.props.subscriptions.includes(this.props.podcast.id)) {
        this.setState({ subscribed: true, button: "Unsubscribe" });
      } else {
        this.setState({ subscribed: false, button: "Subscribe" });
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if (Object.keys(nextProps.podcast).length) {
      if (nextProps.subscriptions.includes(nextProps.podcast.id)) {
        this.setState({ subscribed: true, button: "Unsubscribe" });
      } else {
        this.setState({ subscribed: false, button: "Subscribe" });
      }
    }
  }

  toggleSubscribe(){
    this.setState({ subscribe: !this.state.subscribe});
  }

  playerHandler(){
    //start playlist with all podcasts
  }

  subscriblehandler(){

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
                <img src={this.props.podcast.image_url} />
              </li>
              <li className="buttons-descriptions">
                <ul>
                  <li>
                    <p className="description">{this.props.podcast.description}</p>
                  </li>
                  <li className="row-buttons">
                    <ul>
                      <li><i className="fa fa-play" aria-hidden="true" title="Play Podcast Radio"></i></li>
                      <li><button className="subscribe-button" onClick={() => this.toggleSubscribe}>
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
