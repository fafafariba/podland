import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

class Popular extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPopularPodcasts();
  }

  render(){
    let popular = [];

    if (this.props.popular) {
      popular =this.props.popular.map((podcast, idx) => (
        <li key={podcast+"li"+idx}>
          <ul className="podcast-container">
            <li>
              <div className="podcast-img" style={podcastStyle(podcast.image_url)}>
                <div className="podcast-overlay">
                  <a href="" title="Play Latest Episode">
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
      <section>
        <div className="home-header">
          <ul>
            <li>
              <h2>Popular</h2>
            </li>
            <li>
              <Link to="/podcasts">More</Link>
            </li>
          </ul>
        </div>
        <section className="podcasts">
          <ul>
            { popular }
          </ul>
        </section>
      </section>
    );
  }
}


export default Popular;
