import { connect } from 'react-redux';
import { fetchAllPodcasts } from '../../actions/podcast_actions';
import PodcastsAll from './podcasts_all';
import { withRouter } from 'react-router';
import { receiveAudio } from '../../actions/audio_actions';

const mapStateToProps = state => ({
  allPodcasts: state.podcasts.all
});

const mapDispatchToProps = dispatch => ({
  fetchAllPodcasts: () => dispatch(fetchAllPodcasts()),
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRouter(PodcastsAll));
