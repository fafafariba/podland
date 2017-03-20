import { connect } from 'react-redux';
import { fetchPodcast, fetchEpisodes } from '../../../actions/podcast_actions';
import { withRouter } from 'react-router';
import PodcastDetail from './podcast_detail';

const mapStateToProps = state => ({
  podcast: state.podcastDetail.podcast,
  errors: state.podcastDetail.errors
});

const mapDispatchToProps = dispatch => ({
  fetchPodcast: id => dispatch(fetchPodcast(id)),
  fetchEpisodes: id => dispatch(fetchEpisodes(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetail);
