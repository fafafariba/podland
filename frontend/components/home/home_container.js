import { connect } from 'react-redux';
import { fetchPodcast, fetchPodcasts, receiveErrors, clearErrors }
  from '../../actions/podcast_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  podcasts: state.session.podcasts,
  podcastDetail: state.session.podcastDetail,
  subscriptions: state.subscriptions
  // subscriptions: state.session.subscriptions.subscriptions,
  // subErrors: state.session.subscriptions.errors,
  // playlists: state.session.playlists.playists,
  // plErrors: state.session.playlists.errors
});

const mapDispatchToProps = dispatch => ({
  fetchPodcast: () => dispatch(fetchPodcast()),
  fetchPodcasts: () => dispatch(fetchPodcasts()),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
