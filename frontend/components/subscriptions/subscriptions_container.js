import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../actions/podcast_actions';
import Subscriptions from './subscriptions';
import { withRouter } from 'react-router';
import { selectSubscriptions } from '../../reducers/selectors.js';
import { receiveAudio } from '../../actions/audio_actions';


const mapStateToProps = state => ({
  subscriptions: selectSubscriptions(state.subscriptions.subscriptions),
  messages: state.subscriptions.messages
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Subscriptions));
