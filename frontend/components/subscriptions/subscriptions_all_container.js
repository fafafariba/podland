import { connect } from 'react-redux';
import { clearErrors, fetchAllSubscriptions, addSubscription, deleteSubscription } from '../../actions/podcast_actions';
import Subscriptions from './subscriptions';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.subscriptions,
  errors: state.subscriptions.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  addSubscription: () => dispatch(addSubscription()),
  deleteSubscription: () => dispatch(deleteSubscription())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Subscriptions));
