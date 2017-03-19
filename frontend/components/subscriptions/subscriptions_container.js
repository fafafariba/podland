import { connect } from 'react-redux';
import { clearErrors, fetchAllSubscriptions } from '../../actions/podcast_actions';
import Subscriptions from './subscriptions';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.subscriptions,
  errors: state.subscriptions.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Subscriptions));
