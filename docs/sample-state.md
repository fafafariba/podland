```js
{
  currentUser: {
    id: 1,
    username: "fafafariba"
    name: "Fariba"
    image_url: "/image.jpg"
    subs: [ 7, 23, 13, 27 ] //podcast_id
  },
  errors: [],
  podcasts : [
    //Array of podcast objects like below
  ]
  podcast: {
    1: {
      title: "This American Life",
      description: "From WBEZ Chicago Public Radio, This American Life podcast gives listeners touching, humorous and often unexpected vignettes of life in America. Hosted by Ira Glass, these weekly short stories are an on demand version of the popular radio show and available in Stitcher's Society & Culture station. Consistently ranked #1 Podcast in the US. New episodes available on Mondays.",
      image_url: "http something",
      api_id: 13,
      link: "https://www.thisamericanlife.org",
      categories: {
        1: {
          id: 1,
          name: "News & Society"
        },
        2: {
          id: 2
          name: "Arts"
        }
      }
    }
  },
  playlist: {
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
  }
  player: {
      episode_id: 3,
      source: "playlist" (or "podcast" or "single"),
      source_id: 5
    }
  }
}
```
