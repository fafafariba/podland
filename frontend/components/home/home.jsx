import React from 'react';
import Subscriptions from '../subscriptions/subscriptions';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <main className="home">
      <section>
        <h2>Featured</h2>
        <ul>
          <li>
            <Link to="/podcasts">
              <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/56516.jpg"/>
            </Link>
            <p>Reply All</p>
          </li>
          <li>
            <Link to="/podcasts">
              <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/54050.jpg"/>
            </Link>
            <p>Serial</p>
          </li>
          <li>
            <Link to="/podcasts">
              <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/85049.jpg"/>
            </Link>
            <p>How to Be a Girl</p>
        </li>
          <li>
            <Link to="/podcasts">
              <img src="http://cloudfront.assets.stitcher.com/feedimagesplain328/11394.jpg"/>
            </Link>
          <p>Freakonomics</p>
          </li>

        </ul>
      </section>
      <br/>
      <section>
        <h2>My Subscriptions</h2>
        <Subscriptions />
      </section>
      <br/>
      <section>
        <h2>Popular</h2>
        <ul>
          <li>Podcast 1</li>
          <li>Podcast 2</li>
          <li>Podcast 3</li>
        </ul>
      </section>
    </main>);
};

export default Home;
