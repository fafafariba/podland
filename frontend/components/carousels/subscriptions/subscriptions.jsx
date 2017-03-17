import React from 'react';
import { Link } from 'react-router';


const subscriptions =
<ul className="carousel">
  <div className="carousel js-flickity"
    data-flickity-options='{
      "cellAlign": "left",
      "contain": true,
      "groupCells": true,
      "adaptiveHeight: true"}'>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
      <li className="carousel-cell">
        <Link to="/podcasts">
          <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
        </Link>
        <p>Reply All</p>
      </li>
  </div>
</ul>;


// var subscriptions = new Flickity( '.main-carousel', {
  // options
// });

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section>
        <ul>
          <li>
            {subscriptions}
          </li>
        </ul>
      </section>
    );
  }
}


export default Subscriptions;
