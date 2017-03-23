import { connect } from 'react-redux';
import { fetchPodcast, fetchAllPodcasts, receiveErrors, clearErrors,
  fetchSubscriptions, fetchFeaturedPodcasts, fetchPopularPodcasts }
  from '../../actions/podcast_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  allPodcasts: state.podcasts.all,
  featuredPodcasts: state.podcasts.featured,
  popularPodcasts: state.podcasts.popular,
  subscriptions: state.subscriptions.subscriptions,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPodcasts: () => dispatch(fetchAllPodcasts()),
  fetchFeaturedPodcasts: () => dispatch(fetchFeaturedPodcasts()),
  fetchPopularPodcasts: () => dispatch(fetchPopularPodcasts()),
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
