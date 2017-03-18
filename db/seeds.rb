
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
pcast4 = Podcast.create!(name: "For Colored Nerds",
  description: "Each week, BFFs Brittany and Eric humorously deep-dive into the uncool topic of their choice while testing the outer limits of their friendship.",
  category: "Society & Culture",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/59039.jpg",
  thumb_url: "http://is5.mzstatic.com/image/thumb/Music62/v4/eb/e1/ef/ebe1efa7-3796-2f0f-2df7-77859a020b57/source/170x170bb.jpg",
  link:"http://www.forcolorednerds.com"
  )
pcast5 = Podcast.create!(name: "Radiolab",
  description: "A two-time Peabody Award-winner, Radiolab is an investigation told through sounds and stories, and centered around one big idea. In the Radiolab world, information sounds like music and science and culture collide. Hosted by Jad Abumrad and Robert Krulwich, the show is designed for listeners who demand skepticism, but appreciate wonder. WNYC Studios is the producer of other leading podcasts including Freakonomics Radio, Death, Sex & Money, On the Media and many more.",
  category: "Science",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/5459.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music71/v4/a3/5c/0a/a35c0ad1-8b64-f680-77b1-09a12c01e950/source/170x170bb.jpg",
  link:"http://www.radiolab.org"
  )
pcast6 = Podcast.create!(name: "Bulletproof Radio",
description: "Bulletproof Executive Radio was born out of a fifteen-year single-minded crusade to upgrade the human being using every available technology. It distills the knowledge of more than 120 world-class MDs, biochemists, Olympic nutritionists, meditation experts, and more than $250,000 spent on personal self-experiments. From private brain EEG facilities hidden in a Canadian forest to remote monasteries in Tibet, from Silicon Valley to the Andes, high tech entrepreneur Dave Asprey used hacking techniques and tried everything himself, obsessively focused on discovering: What are the simplest things you can do to be better at everything? Welcome to being bulletproof, the state of high performance where you take control of and improve your biochemistry, your body, and your mind so they work in unison, helping you execute at levels far beyond what you’d expect, without burning out, getting sick, or just acting like a stressed-out jerk. It used to take a lifetime to radically rewire the human body and mind this way. Technology has changed the rules. Follow along as Dave Asprey and guests provide you with everything you need to upgrade your mind, body, and life.",
category: "Health & Nutrition",
image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/18656.jpg",
thumb_url: "http://is1.mzstatic.com/image/thumb/Music122/v4/3b/47/f8/3b47f8f6-b123-9cbc-3829-4480730e14d5/source/170x170bb.jpg",
link: "https://blog.bulletproof.com"
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
