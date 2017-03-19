import * as PodcastAPIUtil from '../util/podcast_api_util';

export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';
export const RECEIVE_FEATURED_PODCASTS = 'RECEIVE_FEATURED_PODCASTS';
export const RECEIVE_POPULAR_PODCASTS = 'RECEIVE_POPULAR_PODCASTS';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';

export const receiveAllPodcasts = podcasts => ({
  type: RECEIVE_ALL_PODCASTS,
  podcasts
});

export const receiveFeaturedPodcasts = featured => ({
  type: RECEIVE_FEATURED_PODCASTS,
  featured
});

export const receivePopularPodcasts = popular => ({
  type: RECEIVE_POPULAR_PODCASTS,
  popular
});

export const receivePodcast = podcast => ({
  type: RECEIVE_PODCAST,
  podcast
});

export const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts().then(podcasts => (
    dispatch(receiveAllPodcasts(podcasts)))).fail(errors => (
      dispatch(receiveErrors)))
);

export const fetchFeaturedPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts("featured").then(podcasts => (
    dispatch(receiveFeaturedPodcasts(podcasts)))).fail(errors => (
      dispatch(receiveErrors)))
);

window.fetchFeaturedPodcasts = fetchFeaturedPodcasts;

export const fetchPopularPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts("popular").then(podcasts => (
    dispatch(receivePopularPodcasts(podcasts)))).fail(errors => (
      dispatch(receiveErrors)))
);

export const fetchPodcast = podcastId => dispatch => (
  PodcastAPIUtil.fetchPodcast(podcastId).then(podcast => (
    dispatch(receivePodcast(podcast)))).fail(errors => (
      dispatch(receiveErrors)))
);

export const fetchSubscriptions = () => dispatch => (
  PodcastAPIUtil.fetchSubscriptions().then(subs => (
    dispatch(receiveSubscriptions(subs)))).fail(errors => (
      dispatch(receiveErrors)))
    );
