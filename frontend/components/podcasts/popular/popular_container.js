import { connect } from 'react-redux';
import { fetchPopularPodcasts } from '../../../actions/podcast_actions';
import Popular from './popular';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  popular: state.podcasts.popular
});

const mapDispatchToProps = dispatch => ({
  fetchPopularPodcasts: () => dispatch(fetchPopularPodcasts())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Popular));
