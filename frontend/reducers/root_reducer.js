import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PodcastsReducer from './podcasts_reducer';
import PodcastDetailReducer from './podcast_detail_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  podcasts: PodcastsReducer,
  // podcastDetail: PodcastDetailReducer,
  // subscriptions: SubscriptionsReducer
  // playlists: PlaylistsReducer,
  // episodes: EpisodesReducer
  // player: PlayerReducer
});

export default RootReducer;
