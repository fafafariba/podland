
export const fetchAllPodcasts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/podcasts'
  })
);

export const fetchPodcast = (podcastId) => (
  $.ajax({
    method: 'GET',
    url: `api/podcasts/${podcastId}`
  })
);
