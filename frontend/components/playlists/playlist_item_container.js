import { connect } from 'react-redux';
import { deletePlaylist, deleteTrack, clearMessages }
  from '../../actions/playlist_actions';
import { receiveAudio } from '../../actions/audio_actions';
import PlaylistItem from './playlist_item';

const mapDispatchToProps = dispatch => ({
  deleteTrack: (playlistId, episodeId) => dispatch(deleteTrack(playlistId, episodeId)),
  clearMessages: () => dispatch(clearMessages()),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  receiveAudio: audio => dispatch(receiveAudio(audio))
});

export default connect(null, mapDispatchToProps)(PlaylistItem);
