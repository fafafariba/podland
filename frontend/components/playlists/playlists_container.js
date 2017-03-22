import { connect } from 'react-redux';
import { fetchPlaylists, addPlaylist, deletePlaylist, deleteTrack,
  clearErrors } from '../../actions/playlist_actions';
import Playlists from './playlists';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
  playlists: state.playlists.playlists,
  errors: state.playlists.errors
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  addPlaylist: (name) => dispatch(addPlaylist(name)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
