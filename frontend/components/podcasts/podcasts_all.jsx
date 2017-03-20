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
  }

  componentWillMount(){
    this.props.fetchAllPodcasts();
  }

  render() {
    console.log(this.props);
    let allPodcasts=[];
    if (this.props.allPodcasts) {
      console.log(true);
      allPodcasts = this.props.allPodcasts.map((podcast, idx) => (
      <li key={podcast+idx}>
        <ul className="podcast-container" >
          <li>
            <div className="podcast-img"
              style={podcastStyle(podcast.image_url)}>
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
