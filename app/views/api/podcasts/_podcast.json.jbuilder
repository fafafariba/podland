json.extract! podcast, :id, :name, :description, :category, :image_url,
:thumb_url, :link, :popularity

json.set! :popularity, podcast.popularity
