import { connect } from 'react-redux';
import { fetchPodcast, addSubscription, deleteSubscription,
  fetchSubscriptions } from '../../../actions/podcast_actions';
import { withRouter } from 'react-router';
import PodcastDetail from './podcast_detail';
import { selectSubscriptionIds } from '../../../reducers/selectors.js';
import { receiveAudio } from '../../../actions/audio_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
  podcast: state.podcastDetail.podcast,
  subscriptions: state.subscriptions.subscriptions
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  fetchPodcast: podcastId => dispatch(fetchPodcast(podcastId)),
  addSubscription: podcastId => dispatch(addSubscription(podcastId)),
  deleteSubscription: id => dispatch(deleteSubscription(id)),
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetail);
