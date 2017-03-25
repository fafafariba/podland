```js
{
  session: {
    currentUser: {
      id: 1,
      username: "fafafariba",
      name: "Fariba",
    },
    errors: []
  },
  
  subscriptions: {
    subscriptions: { 
      23: {
        subscription_id: 23
        podcasts: [] //Array of user's podcasts
      }
    },
    errors : []
  },
  
  podcasts : {
    all: [] //Array of all podcasts
    popular: //Array of podcast objects like below
    featured: //Array of podcast objects selected based on genre
  },

  podcastDetail: {
    podcast:
      {
      id: 345,
      title: "This American Life",
      description: "From WBEZ Chicago Public Radio, This American Life podcast gives listeners touching, humorous and often unexpected         vignettes of life in America. Hosted by Ira Glass, these weekly short stories are an on demand version of the popular radio show   
      and available in Stitcher's Society & Culture station. Consistently ranked #1 Podcast in the US. New episodes available on Mondays.",
      image_url: "http something",
      thumb_url: ".jpg",
      link: "https://www.thisamericanlife.org",
      categories: "Society & Culture",
      popularity: 4,
      episodes: {
        [] //Array of podcasts
      }
    },
    
  playlists: {
    playlists: {
      1: {
        id: 1,
        user_id: 1
        name: "Some title",
        episodes
      },
      
  audio: { 
    [] //Array of audio objects
  }
}
```
