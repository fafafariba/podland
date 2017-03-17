import React from 'react';
import SubscriptionsContainer from '../carousels/subs/subs_container';
import Popular from '../carousels/popular/popular';
import Featured from '../carousels/featured';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchSubscriptions();
  }

  render() {

    return (
      <main className="home">
        <section>
          <h2>Featured</h2>
          <Featured />
        </section>
        <br/>
        <section>
          <h2>My Subscriptions</h2>
          <SubscriptionsContainer />
        </section>
        <br/>
        <section>
          <h2>Popular</h2>
          <Popular />
        </section>
      </main>);
    }
}

export default Home;
