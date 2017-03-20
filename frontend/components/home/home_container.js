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
  podcastDetail: state.session.podcastDetail,
  subscriptions: state.subscriptions.subscriptions
  // subErrors: state.session.subscriptions.errors,
  // playlists: state.session.playlists.playists,
  // plErrors: state.session.playlists.errors
});

const mapDispatchToProps = dispatch => ({
  fetchPodcast: (id) => dispatch(fetchPodcast(id)),
  fetchAllPodcasts: () => dispatch(fetchAllPodcasts()),
  fetchFeaturedPodcasts: () => dispatch(fetchFeaturedPodcasts()),
  fetchPopularPodcasts: () => dispatch(fetchPopularPodcasts()),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors()),
  fetchSubscriptions: () => dispatch(fetchSubscriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
