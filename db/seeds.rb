
### DON'T FORGET TO DESTROY ALL!
User.destroy_all
Podcast.destroy_all
Subscription.destroy_all


### USERS
guest = User.create!(name: "Guest", email: "guest@guest.com", password:"beourguest")
tester = User.create!(name: "Fariba", email: "a", password: "asdfjk")


### PODCASTS
pcast1 = Podcast.create!(name: "This American Life",
  description: "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 1.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards.",
  category: "Society & Culture",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/4903.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music71/v4/03/3c/f1/033cf19b-a70e-108f-2d77-82c5b8c8cde0/source/170x170bb.jpg",
  link: "http://www.thisamericanlife.org",
  )
pcast2 = Podcast.create!(name: "Note to Self",
  description: "Join host Manoush Zomorodi for your weekly reminder to question everything. Is your phone watching you? Can wexting make you smarter? Are your kids real? These and other essential quandaries for anyone trying to preserve their humanity in the digital age. Produced by WNYC Studios.",
  category: "Technology",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/33283.jpg",
  thumb_url: "http://is3.mzstatic.com/image/thumb/Music111/v4/d6/04/42/d60442fb-dbc3-22e0-e23b-121cef5d511e/source/170x170bb.jpg",
  link: "http://www.wnyc.org/shows/notetoself",
  )
pcast3 = Podcast.create!(name: "The Moth",
  description: "Since its launch in 1997, The Moth has presented thousands of true stories, told live and without notes, to standing-room-only crowds worldwide. Moth storytellers stand alone, under a spotlight, with only a microphone and a roomful of strangers. The storyteller and the audience embark on a high-wire act of shared experience which is both terrifying and exhilarating. Since 2008, The Moth podcast has featured many of our favorite stories told live on Moth stages around the country. For information on all of our programs and live events, visit themoth.org.",
  category: "Arts",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/6506.jpg",
  thumb_url: "http://is5.mzstatic.com/image/thumb/Music62/v4/e4/21/0e/e4210e1b-9efc-3064-d878-da592b8a92c8/source/170x170bb.jpg",
  link: "https://themoth.org/podcast"
  )


### SUBSCRIPTIONS
subs1 = Subscription.create!(user_id: tester.id, podcast_id: pcast1.id)
subs2 = Subscription.create!(user_id: tester.id, podcast_id: pcast2.id)
subs3 = Subscription.create!(user_id: tester.id, podcast_id: pcast3.id)
subs4 = Subscription.create!(user_id: guest.id, podcast_id: pcast1.id)
subs5 = Subscription.create!(user_id: guest.id, podcast_id: pcast2.id)
subs6 = Subscription.create!(user_id: guest.id, podcast_id: pcast3.id)


## EPISODES


## PLAYLISTS
