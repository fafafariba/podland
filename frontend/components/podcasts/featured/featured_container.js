import { connect } from 'react-redux';
import { fetchFeaturedPodcasts } from '../../../actions/podcast_actions';
import Featured from './featured';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  featured: state.podcasts.featured
});

const mapDispatchToProps = dispatch => ({
  fetchFeaturedPodcasts: () => dispatch(fetchFeaturedPodcasts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Featured));
