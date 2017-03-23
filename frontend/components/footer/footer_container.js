import { connect } from 'react-redux';
import { clearErrors, receiveAudio } from '../../actions/audio_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  audio: state.audio,
});

export default connect(mapStateToProps)(Footer);
