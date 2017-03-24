import React from 'react';
import { Link } from 'react-router';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.playHandler = this.playHandler.bind(this);
  }

  playHandler(audio, id){
    this.props.receiveAudio(audio);
    this.props.router.push(`/podcasts/${id}`);
  }

  render () {
    let featured = [];
      if (this.props.featured) {
      featured =
      this.props.featured.map((podcast, idx) => (
        <li key={podcast+idx}>
          <ul className="podcast-container" >
            <li>
              <div className="podcast-img" style={podcastStyle(podcast.image_url)}>
                <div className="podcast-overlay"
                  onClick={ () => this.playHandler(podcast.episodes, podcast.id) }>
                    <i className="fa fa-play-circle" aria-hidden="true"
                      title="Play Latest Episode"></i>
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
              <h2>Featured</h2>
            </li>
            <li>
              <Link to="/podcasts">More</Link>
            </li>
          </ul>
        </div>
        <section className="podcasts">
          <ul>
            { featured }
          </ul>
        </section>
      </section>
    );
  }
}


export default Featured;
