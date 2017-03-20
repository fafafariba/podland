import { connect } from 'react-redux';
import { clearMessages, fetchSubscriptions }
  from '../../actions/podcast_actions';
import Subscriptions from './subscriptions';
import { withRouter } from 'react-router';
import { selectSubscriptions } from '../../reducers/selectors.js';

const mapStateToProps = state => ({
  subscriptions: selectSubscriptions(state.subscriptions.subscriptions),
  messages: state.subscriptions.messages
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  clearMessages: () => dispatch(clearMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Subscriptions));
