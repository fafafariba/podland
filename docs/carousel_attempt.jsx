import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const podcastStyle = url =>({
  backgroundImage: 'url(' + url + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
});

const width = document.documentElement.clientWidth;
let slides = 5;

if (width > 1200) {
  slides = 5;
} else if (width > 800) {
  slides = 4;
} else {
  slides = 3;
}

const settings = {
  dots: true,
  accessibility: true,
  adaptiveHeight: false,
  infinite: true,
  speed: 500,
  slidesToShow: slides,
  slidesToScroll: slides,
  arrows: true,
  swipe: true,
  swipeToSlide: true,
  };


class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const featured = (
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
    );

    return (
      <section>
        <ul>
          <li>
            { featured }
          </li>
        </ul>
      </section>
    );
  }
}


export default Featured;


// <div className="carousel">
//   <Slider {...settings}>
//
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//     <div className="carousel-cell">
//       <Link to="/podcasts">
//         <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
//       </Link>
//       <p>Reply All</p>
//     </div>
//   </Slider>
// </div>
// </div>
