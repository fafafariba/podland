import { connect } from 'react-redux';
import { fetchPopularPodcasts } from '../../../actions/podcast_actions';
import Popular from './popular';
import { withRouter } from 'react-router';
import { receiveAudio } from '../../../actions/audio_actions';

const mapStateToProps = state => ({
  popular: state.podcasts.popular
});

const mapDispatchToProps = dispatch => ({
  fetchPopularPodcasts: () => dispatch(fetchPopularPodcasts()),
  receiveAudio: (audio) => dispatch(receiveAudio(audio))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRouter(Popular));
