import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import PodcastsReducer from './podcasts_reducer';
import PodcastDetailReducer from './podcast_detail_reducer';
import EpisodesReducer from './episodes_reducer';
import PlaylistsReducer from './playlists_reducer';
import AudioReducer from './audio_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  podcasts: PodcastsReducer,
  subscriptions: SubscriptionsReducer,
  podcastDetail: PodcastDetailReducer,
  playlists: PlaylistsReducer,
  audio: AudioReducer
});

export default RootReducer;
