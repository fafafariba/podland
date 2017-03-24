import { connect } from 'react-redux';
import { fetchPlaylists, addTrack, clearMessages }
  from '../../../actions/playlist_actions';
import SelectPlaylistItem from './select_playlist_item';

const mapStateToProps = (state, ownProps) => ({
  playlists: Object.values(state.playlists.playlists),
  messages: state.playlists.messages
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  addTrack: (playlistId, episodeId) => dispatch(addTrack(playlistId, episodeId)),
  clearMessages: () => dispatch(clearMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlaylistItem);
