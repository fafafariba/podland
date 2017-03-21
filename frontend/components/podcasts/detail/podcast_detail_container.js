import { connect } from 'react-redux';
import { fetchPodcast, addSubscription, deleteSubscription,
  fetchSubscriptions, clearMessages }
  from '../../../actions/podcast_actions';
import { withRouter } from 'react-router';
import PodcastDetail from './podcast_detail';
import { selectSubscriptionIds } from '../../../reducers/selectors.js';

const mapStateToProps = state => ({
  podcast: state.podcastDetail.podcast,
  errors: state.podcastDetail.errors,
  subscriptions: selectSubscriptionIds(state.subscriptions.subscriptions)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  fetchPodcast: (podcastId) => dispatch(fetchPodcast(podcastId)),
  addSubscription: id => dispatch(addSubscription(id)),
  removeSubscription: id => dispatch(deleteSubscription(id)),
  clearMessages: id => dispatch(clearMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetail);
