import { connect } from 'react-redux';
import { fetchAllPodcasts } from '../../actions/podcast_actions';
import PodcastsAll from './podcasts_all';

const mapStateToProps = state => ({
  allPodcasts: state.podcasts.all
});

const mapDispatchToProps = dispatch => ({
  fetchAllPodcasts: () => dispatch(fetchAllPodcasts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastsAll);
