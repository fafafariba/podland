import { connect } from 'react-redux';
import { fetchPlaylists, addPlaylist, deletePlaylist, deleteTrack,
  clearMessages} from '../../actions/playlist_actions';
import { receiveAudio } from '../../actions/audio_actions';
import Playlists from './playlists';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
  playlists: state.playlists.playlists,
  messages: state.playlists.messages
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  receiveAudio: (audio) => dispatch(receiveAudio(audio)),
  addPlaylist: (name) => dispatch(addPlaylist(name)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  clearMessages: () => dispatch(clearMessages()),
  deleteTrack: (playlistId, episodeId) => dispatch(deleteTrack(playlistId, episodeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
