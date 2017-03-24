import { connect } from 'react-redux';
import { receiveAudio } from '../../../actions/audio_actions';
import { clearMessages } from '../../../actions/playlist_actions';
import Episode from './episode';

const mapStateToProps = (state, ownProps) => ({
  messages: state.playlists.messages
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: audio => dispatch(receiveAudio(audio)),
  clearMessages: () => dispatch(clearMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
