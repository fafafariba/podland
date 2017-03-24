import { connect } from 'react-redux';
import { clearMessages, fetchSubscriptions, addSubscription, deleteSubscription }
  from '../../actions/podcast_actions';
import SubscriptionsAll from './subscriptions_all';
import { withRouter } from 'react-router';
import { selectSubscriptions } from '../../reducers/selectors.js';
import { receiveAudio } from '../../actions/audio_actions';

const mapStateToProps = state => ({
  subscriptions: selectSubscriptions(state.subscriptions.subscriptions),
  messages: state.subscriptions.messages
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  deleteSubscription: (id) => dispatch(deleteSubscription(id)),
  clearMessages: () => dispatch(clearMessages()),
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(
  mapStateToProps, mapDispatchToProps)(withRouter(SubscriptionsAll));
