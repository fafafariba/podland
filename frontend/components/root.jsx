import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
// import SubscriptionsContainer from './subscriptions/subscriptions_container';
// import PodcastsContainer from './podcasts/podcasts_container';
// import ProfileContainer from './podcasts/profile/profile_container';

const Root = ({ store }) => {
  const currentUser = store.getState().session.currentUser;
  const _ensureLoggedIn = (nextState, replace) => {
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ HomeContainer }
            onEnter={_ensureLoggedIn } />
          <Route path="/welcome" component={ SplashContainer }
            onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
// <Route path="/subscriptions" component={ PodcastsContainer } onEnter={_ensureLoggedIn } />
// <Route path="/podcasts" component={ PodcastsContainer } onEnter={_ensureLoggedIn } >
//   <Route path="/podcasts/:podcastId" component={ ProfileContainer } onEnter={_ensureLoggedIn } />
// </Route>
