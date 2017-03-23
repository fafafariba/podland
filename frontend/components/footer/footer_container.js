import { connect } from 'react-redux';
import { clearErrors, receiveAudio } from '../../actions/audio_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  audio: state.audio,
});

const mapDispatchToProps = dispatch => ({
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(mapStateToProps)(Footer);
