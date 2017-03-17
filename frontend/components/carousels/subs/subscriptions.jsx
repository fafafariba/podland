import React from 'react';
import { Link } from 'react-router';

class Subscriptions extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

  let subscriptions = <p>No subscriptions yet.</p>;

  if (this.props.subscriptions) {
    const tenPods = this.props.subscriptions.slice(0,10);
    const carouselCells = tenPods.map((podcast, el) => (
      <li className="carousel-cell">
        <Link to={ `/podcasts/${podcast.id}`}>
          <img src={podcast.image_url}/>
        </Link>
        <p>{podcast.name}</p>
      </li>
    ));

    const carousel = (
      <ul className="carousel">
        <div className="carousel js-flickity"
          data-flickity-options='{
            "cellAlign": "left",
            "contain": true,
            "groupCells": true}'>
            {carouselCells}
        </div>
      </ul>);

    subscriptions = carousel;
    }

    return (
      <section>
        <ul>
          <li>
            { subscriptions }
          </li>
        </ul>
      </section>
    );
  }
}


export default Subscriptions;
