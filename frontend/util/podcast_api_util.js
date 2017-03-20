
export const fetchPodcasts = (filter = "") => (
  $.ajax({
    method: 'GET',
    url: `api/podcasts?filter=${filter}`
  })
);

export const fetchPodcast = (podcastId) => (
  $.ajax({
    method: 'GET',
    url: `api/podcasts/${podcastId}`
  })
);

export const fetchSubscriptions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/subscriptions'
  })
);

export const addSubscription = subscription => (
  $.ajax({
    method: 'POST',
    data: { subscription },
    url: "/api/subscriptions"
  })
);

export const deleteSubscription = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${id}`
  })
);

export const fetchEpisode = id => (
  $.ajax({
    method: 'GET',
    url: `/api/episodes/${id}`
  })
);
