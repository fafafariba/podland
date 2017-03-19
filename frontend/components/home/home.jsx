import React from 'react';
import SubscriptionsContainer from '../subscriptions/subscriptions_container';
import PopularContainer from '../podcasts/popular/popular_container';
import FeaturedContainer from '../podcasts/featured/featured_container';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchFeaturedPodcasts();
    this.props.fetchSubscriptions();
    this.props.fetchPopularPodcasts();
  }

  render() {

    return (
      <main className="home">
          <FeaturedContainer/>
        <br/>
        <section>
          <SubscriptionsContainer/>
        </section>
        <br/>
        <section>
          <PopularContainer />
        </section>
      </main>);
    }
}

export default Home;
