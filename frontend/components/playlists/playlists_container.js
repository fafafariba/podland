import { connect } from 'react-redux';
import { fetchPlaylists, newPlaylist, deletePlaylist, deleteTrack,
  clearErrors } from '../../../actions/podcast_actions';
import { withRouter } from 'react-router';
import Playlists from './playlists';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
  playlists: state.playlists.playlists,
  errors: state.playlists.errors,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  newPlaylist: () => dispatch(newPlaylist()),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
