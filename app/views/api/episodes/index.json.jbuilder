@episodes.each do |episode|
  json.extract! episode, :id, :name, :description, :podcast_id, :audio_url,
    :date, :no, :duration, :image_url
end
