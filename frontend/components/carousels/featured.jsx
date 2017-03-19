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
  }

  render () {
    const featured1 = (
      <li>
        <ul className="podcast-container">
          <li>
            <div className="podcast-img" style={podcastStyle("http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg")}>
              <div className="podcast-overlay">
                <a href="#" title="Play Latest Episode">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="podcast-link">
              <Link to="/podcasts">Reply All</Link>
            </div>
          </li>
        </ul>
      </li>
    );

    const featured2 = (
      <li>
        <ul className="podcast-container">
          <li>
            <div className="podcast-img" style={podcastStyle("http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg")}>
              <div className="podcast-overlay">
                <a href="#" title="Play Latest Episode">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="podcast-link">
              <Link to="/podcasts">Reply All</Link>
            </div>
          </li>
        </ul>
      </li>
    );

    const featured3 = (
      <li>
        <ul className="podcast-container">
          <li>
            <div className="podcast-img" style={podcastStyle("http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg")}>
              <div className="podcast-overlay">
                <a href="#" title="Play Latest Episode">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="podcast-link">
              <Link to="/podcasts">Reply All</Link>
            </div>
          </li>
        </ul>
      </li>
    );

    const featured4 = (
      <li>
        <ul className="podcast-container">
          <li>
            <div className="podcast-img" style={podcastStyle("http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg")}>
              <div className="podcast-overlay">
                <a href="#" title="Play Latest Episode">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="podcast-link">
              <Link to="/podcasts">Reply All</Link>
            </div>
          </li>
        </ul>
      </li>
    );

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
            { featured1 }
            { featured2 }
            { featured3 }
            { featured4 }
          </ul>
        </section>
      </section>
    );
  }
}


export default Featured;
