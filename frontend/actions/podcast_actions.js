import * as PodcastAPIUtil from '../util/podcast_api_util';

export const RECEIVE_PODCASTS = 'RECEIVE_PODCASTS';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receivePodcasts = podcasts => ({
  type: RECEIVE_PODCASTS,
  podcasts
});

export const receivePodcast = podcast => ({
  type: RECEIVE_PODCAST,
  podcast
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchAllPodcasts().then(podcasts => (
    dispatch(receivePodcasts(podcasts)))).fail(errors => (
      dispatch(receiveErrors)))
);

window.fetchAllPodcasts = fetchAllPodcasts;

export const fetchPodcast = podcastId => dispatch => (
  PodcastAPIUtil.fetchPodcast(podcastId).then(podcast => (
    dispatch(receivePodcast(podcast)))).fail(errors => (
      dispatch(receiveErrors)))
);

window.fetchPodcast = fetchPodcast;

// export const fetchPodcast = podcastId => dispatch => (
//   PodcastAPIUtil.fetchPocast(podcastId).then(podcast => (
//     dispatch(receivePodcast(podcast)))).fail(errors => (
//       dispatch(receiveErrors)))
// );
