json.extract! episode, :id, :name, :description, :podcast_id, :audio_url,
  :date, :no, :duration, :image_url, :podcast_thumb_url

json.set! :podcast_thumb_url, episode.podcast_thumb_url
