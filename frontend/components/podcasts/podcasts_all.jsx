import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

class PodcastsAll extends React.Component {
  constructor(props){
    super(props);
    this.playHandler = this.playHandler.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPodcasts();
  }
  playHandler(audio, id){
    this.props.receiveAudio(audio);
    this.props.router.push(`/podcasts/${id}`);
  }

  render() {
    let allPodcasts=[];
    if (this.props.allPodcasts) {

      allPodcasts = this.props.allPodcasts.map((podcast, idx) => (
      <li key={podcast+idx}>
        <ul className="podcast-container" >
          <li>
            <div className="podcast-img"
              style={podcastStyle(podcast.image_url)}>
              <div className="podcast-overlay">
                <i className="fa fa-play-circle" aria-hidden="true"
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
    }

    return (
      <main className="all-podcasts">
        <header className="all-podcasts-header">
          <h2>All</h2>
        </header>
        <section className="podcasts">
          <ul>
            { allPodcasts }
          </ul>
        </section>
      </main>
    );
  }
}

export default PodcastsAll;
