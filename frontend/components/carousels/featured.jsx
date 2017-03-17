import React from 'react';
import { Link } from 'react-router';


const featured =
<ul className="carousel">
  <div className="carousel js-flickity"
    data-flickity-options='{
      "cellAlign": "left",
      "contain": true,
      "pageDots": false,
      "groupCells": true }'>
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


const Featured = () => {
  return (
    <section>
      <ul>
        <li>
          { featured }
        </li>
      </ul>
    </section>
  );
};


export default Featured;
