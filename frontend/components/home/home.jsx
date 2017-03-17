import React from 'react';


const Home = (props) => {
  return (
    <main className="home">
      <section>
        <p>Featured</p>
        <ul>
          <li>Podcast 1</li>
          <li>Podcast 2</li>
          <li>Podcast 3</li>
        </ul>
      </section>
      <br/>
      <section>
        <p>My Subscriptions</p>
        <ul>
          <li>Podcast 1</li>
          <li>Podcast 2</li>
          <li>Podcast 3</li>
        </ul>
      </section>
      <br/>
      <section>
        <p>Popular</p>
        <ul>
          <li>Podcast 1</li>
          <li>Podcast 2</li>
          <li>Podcast 3</li>
        </ul>
      </section>
    </main>);
};

export default Home;
