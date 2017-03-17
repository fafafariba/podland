```js
{
  session: {
    currentUser: {
      id: 1,
      username: "fafafariba",
      name: "Fariba",
      image_url: "/image.jpg"
    },
    errors: []
  },
  subscriptions: {
    subscriptions: { //array of user subscriptions
    },
    errors: []
  }
  podcasts : {
    all: //Array of all podcasts, first 20
    popular: //Array of podcast objects like below
    selected: //Array of podcast objects selected based on genre
  },
  podcastDetail: { //single selected podcasts
    1: {
      title: "This American Life",
      description: "From WBEZ Chicago Public Radio, This American Life podcast gives listeners touching, humorous and often unexpected vignettes of life in America. Hosted by Ira Glass, these weekly short stories are an on demand version of the popular radio show and available in Stitcher's Society & Culture station. Consistently ranked #1 Podcast in the US. New episodes available on Mondays.",
      image_url: "http something",
      thumb_url: ".jpg",
      link: "https://www.thisamericanlife.org",
      categories: "Society & Culture",
      popularity: 4 //number of subscribers
    }
  },
  playlists: [ //array of user playlists
    id:
    episodes:
      1: {
        id: 1,
        podcast_id: 1,
        name: "Some title",
        description: "Some description"
        audio_url: "...mp3",
        date: "Date aired",

      }
  ]
  player: {
      episode_id: 3,
      source: "playlist" (or "podcast" or "single"),
      source_id: 5
    }
  }
}
```
