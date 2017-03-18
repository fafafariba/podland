import React from 'react';
import { Link } from 'react-router';


const popular =
  <div className="carousel"
    data-flickity='{
      "cellAlign": "left",
      "contain": true,
      "groupCells": true }'>
      <ul>
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
    </ul>
  </div>;


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
