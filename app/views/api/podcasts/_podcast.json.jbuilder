json.extract! podcast, :id, :name, :description, :category, :image_url,
:thumb_url, :link, :popularity, :episodes

json.set! :popularity, podcast.popularity
json.set! :episodes, podcast.episodes_desc
