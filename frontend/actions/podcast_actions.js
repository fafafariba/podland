import * as PodcastAPIUtil from '../util/podcast_api_util';

export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';
export const RECEIVE_FEATURED_PODCASTS = 'RECEIVE_FEATURED_PODCASTS';
export const RECEIVE_POPULAR_PODCASTS = 'RECEIVE_POPULAR_PODCASTS';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const receiveAllPodcasts = all => ({
  type: RECEIVE_ALL_PODCASTS,
  all
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

export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const removeSubscription = subscription => ({
  type: REMOVE_SUBSCRIPTION,
  subscription
});


export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
});

export const fetchAllPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts().then(podcasts => (
    dispatch(receiveAllPodcasts(podcasts)))).fail(messages => (
      dispatch(receiveMessages)))
);

export const fetchFeaturedPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts("featured").then(podcasts => (
    dispatch(receiveFeaturedPodcasts(podcasts)))).fail(messages => (
      dispatch(receiveMessages)))
);

export const fetchPopularPodcasts = () => dispatch => (
  PodcastAPIUtil.fetchPodcasts("popular").then(podcasts => (
    dispatch(receivePopularPodcasts(podcasts))))
);

export const fetchPodcast = podcastId => dispatch => (
  PodcastAPIUtil.fetchPodcast(podcastId).then(podcast => (
    dispatch(receivePodcast(podcast)))).fail(errors => (
      dispatch(receiveMessages(errors.responseJSON))))
);

export const fetchSubscriptions = () => dispatch => (
  PodcastAPIUtil.fetchSubscriptions().then(subs => (
    dispatch(receiveSubscriptions(subs))))
    );

export const addSubscription = (subscription) => dispatch => (
  PodcastAPIUtil.addSubscription(subscription).then(subs => {
    dispatch(receiveSubscription(subs));
    dispatch(receiveMessages(["Subscription successfully added."]));
  }).fail(errors => dispatch(receiveMessages(errors.responseJSON)))
);

export const deleteSubscription = (id) => dispatch => (
  PodcastAPIUtil.deleteSubscription(id)
  .then(subs => dispatch(removeSubscription(subs)))
  .then(()=>dispatch(receiveMessages(["Subscription successfully deleted."])))
  .fail(errors => dispatch(receiveMessages(errors.responseJSON)))
);
