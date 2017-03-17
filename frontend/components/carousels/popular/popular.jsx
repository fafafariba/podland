import React from 'react';
import { Link } from 'react-router';


const popular =
<ul className="carousel">
  <div className="carousel js-flickity"
    data-flickity-options='{
      "cellAlign": "left",
      "contain": true,
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


const Popular = () => {
  return (
    <section>
      <ul>
        <li>
          { popular }
        </li>
      </ul>
    </section>
  );
};


export default Popular;
