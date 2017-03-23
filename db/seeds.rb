
### DON'T FORGET TO DESTROY ALL!
User.destroy_all
Podcast.destroy_all
Subscription.destroy_all
Episode.destroy_all
Track.destroy_all
Playlist.destroy_all


### USERS
guest = User.create!(name: "Guest", email: "guest@guest.com", password:"beourguest")
tester = User.create!(name: "Fariba", email: "a", password: "asdfjk")


### PODCASTS
pcast1 = Podcast.create!(name: "This American Life",
  description: "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 1.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards.",
  category: "Society & Culture",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489898154/podland/4903.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music71/v4/03/3c/f1/033cf19b-a70e-108f-2d77-82c5b8c8cde0/source/170x170bb.jpg",
  link: "http://www.thisamericanlife.org",
  )
pcast2 = Podcast.create!(name: "Note to Self",
  description: "Join host Manoush Zomorodi for your weekly reminder to question everything. Is your phone watching you? Can wexting make you smarter? Are your kids real? These and other essential quandaries for anyone trying to preserve their humanity in the digital age. Produced by WNYC Studios.",
  category: "Technology",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489898814/podland/33283.jpg",
  thumb_url: "http://is3.mzstatic.com/image/thumb/Music111/v4/d6/04/42/d60442fb-dbc3-22e0-e23b-121cef5d511e/source/170x170bb.jpg",
  link: "http://www.wnyc.org/shows/notetoself",
  )
pcast3 = Podcast.create!(name: "The Moth",
  description: "Since its launch in 1997, The Moth has presented thousands of true stories, told live and without notes, to standing-room-only crowds worldwide. Moth storytellers stand alone, under a spotlight, with only a microphone and a roomful of strangers. The storyteller and the audience embark on a high-wire act of shared experience which is both terrifying and exhilarating. Since 2008, The Moth podcast has featured many of our favorite stories told live on Moth stages around the country. For information on all of our programs and live events, visit themoth.org.",
  category: "Arts",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489898911/podland/6506.jpg",
  thumb_url: "http://is5.mzstatic.com/image/thumb/Music62/v4/e4/21/0e/e4210e1b-9efc-3064-d878-da592b8a92c8/source/170x170bb.jpg",
  link: "https://themoth.org/podcast"
  )
pcast4 = Podcast.create!(name: "For Colored Nerds",
  description: "Each week, BFFs Brittany and Eric humorously deep-dive into the uncool topic of their choice while testing the outer limits of their friendship.",
  category: "Society & Culture",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489898979/podland/59039.jpg",
  thumb_url: "http://is5.mzstatic.com/image/thumb/Music62/v4/eb/e1/ef/ebe1efa7-3796-2f0f-2df7-77859a020b57/source/170x170bb.jpg",
  link:"http://www.forcolorednerds.com"
  )
pcast5 = Podcast.create!(name: "Radiolab",
  description: "A two-time Peabody Award-winner, Radiolab is an investigation told through sounds and stories, and centered around one big idea. In the Radiolab world, information sounds like music and science and culture collide. Hosted by Jad Abumrad and Robert Krulwich, the show is designed for listeners who demand skepticism, but appreciate wonder.",
  category: "Science",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489899016/podland/5459.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music71/v4/a3/5c/0a/a35c0ad1-8b64-f680-77b1-09a12c01e950/source/170x170bb.jpg",
  link:"http://www.radiolab.org"
  )
pcast6 = Podcast.create!(name: "The Jillian Michaels Show",
description: "Jillian Michaels, America's Health and Wellness guru, brings you the Jillian Michaels Show. An entertaining, inspirational, informative show that gives you tools to find health and happiness in all areas of your life.",
  category: "Health & Nutrition",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/16125.jpg",
  thumb_url: "http://is2.mzstatic.com/image/thumb/Music62/v4/39/0f/78/390f789b-e32e-4c05-a5ff-7740b3b2e99c/source/170x170bb.jpg",
  link: "https://www.jillianmichaels.com/podcast"
  )
pcast7 = Podcast.create!(name:"Call Your Girlfriend",
  description: "A podcast for long distance besties everywhere. Co-hosted by your new BFFs Ann Friedman and Aminatou Sow.",
  category: "Society & Culture",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489899320/podland/49443.jpg",
  thumb_url: "http://is5.mzstatic.com/image/thumb/Music111/v4/6d/ba/8b/6dba8be0-73d5-040d-b3f0-fcb5997c307e/source/170x170bb.jpg",
  link: "http://www.callyourgirlfriend.com"
  )
pcast8 = Podcast.create!(name: "Wait Wait... Don't Tell Me!",
  description: "NPR's weekly current events quiz. Have a laugh and test your news knowledge while figuring out what's real and what we've made up.",
  category: "Comedy",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489899718/podland/4820.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music122/v4/74/90/15/749015f0-7cc0-32b1-1c42-358dc7745693/source/170x170bb.jpg",
  link: "http://www.npr.org/programs/wait-wait-dont-tell-me/"
  )
pcast9 = Podcast.create!(name: "Ask Me Another",
  description: "Ask Me Another brings the lively spirit and healthy competition of your favorite trivia night right to your ears. With a rotating cast of funny people, puzzle writers and VIP guests, it features the wit of host Ophira Eisenberg, the music of house musician Jonathan Coulton, and rambunctious trivia games, all played in front of a live audience.",
  category: "Comedy",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489899819/podland/23397.jpg",
  thumb_url: "http://is4.mzstatic.com/image/thumb/Music62/v4/4b/14/ae/4b14ae9a-38b2-d14c-20ff-ccfa09211093/source/170x170bb.jpg",
  link: "http://www.npr.org/programs/ask-me-another/"
  )
pcast10 = Podcast.create!(name:"KEXP Song of the Day",
  description: "KEXP's Song of the Day podcast features exclusive in-studio performances, unreleased songs, and recordings from independent musicians that KEXP thinks listeners should hear along with songs from more well-known artists.",
  category: "Music",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489900146/podland/11137.jpg",
  thumb_url: "http://is4.mzstatic.com/image/thumb/Music/v4/14/de/94/14de94fa-7c8c-bb8a-9d3e-f301c681a351/source/170x170bb.jpg",
  link: "http://www.kexp.org/podcasts#song"
  )
pcast11 = Podcast.create!(name:"Hidden Brain",
  description: "The Hidden Brain helps curious people understand the world – and themselves. Using science and storytelling, Hidden Brain's host Shankar Vedantam reveals the unconscious patterns that drive human behavior, the biases that shape our choices, and the triggers that direct the course of our relationships.",
  category: "Science",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489992114/71231_ritxfr.jpg",
  thumb_url: "http://is2.mzstatic.com/image/thumb/Music122/v4/7b/16/03/7b1603b4-2f14-3d6a-294a-b9274ea46173/source/170x170bb.jpg",
  link: "http://www.npr.org/series/423302056/hidden-brain"
  )
pcast12 = Podcast.create!(name: "Freakonomics",
  description: "Have fun discovering the hidden side of everything with host Stephen J. Dubner, co-author of the best-selling \"Freakonomics\" books. Each week, hear surprising conversations that explore the riddles of everyday life and the weird wrinkles of human nature—from cheating and crime to parenting and sports. Dubner talks with Nobel laureates and provocateurs, social scientists and entrepreneurs — and his \"Freakonomics\” co-author Steve Levitt. After just a few episodes, this podcast will have you too thinking like a Freak.",
  category: "Society & Culture",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489992248/11394_jsrjwx.jpg",
  thumb_url: "http://is2.mzstatic.com/image/thumb/Music71/v4/7b/a7/41/7ba7414b-4534-3d9a-615e-e00e3d7c7819/source/170x170bb.jpg",
  link: "http://freakonomics.com/"
  )


### SUBSCRIPTIONS
subs1 = Subscription.create!(user_id: tester.id, podcast_id: pcast1.id)
subs2 = Subscription.create!(user_id: tester.id, podcast_id: pcast2.id)
subs3 = Subscription.create!(user_id: tester.id, podcast_id: pcast3.id)
subs4 = Subscription.create!(user_id: guest.id, podcast_id: pcast1.id)
subs5 = Subscription.create!(user_id: guest.id, podcast_id: pcast2.id)
subs6 = Subscription.create!(user_id: guest.id, podcast_id: pcast3.id)


## EPISODES
e1 = Episode.create!(name:"Why Is My Life So Hard?",
description: "Most of us feel we face more headwinds and obstacles than everyone else — which breeds resentment. We also undervalue the tailwinds that help us — which leaves us ungrateful and unhappy. How can we avoid this trap? Below is a transcript of the episode, modified for your reading pleasure. For more information on the people and ideas in the episode, see the links at the bottom of this post. And you’ll find credits for the music in the episode noted within the transcript.",
podcast_id: pcast12.id,
date: Date.new(2017, 03, 16),
no: 279,
duration: "30:29",
audio_url: "http://audio.wnyc.org/freakonomics_podcast/freakonomics_podcast031517.mp3",
image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489992492/5054532634_cf25044dee_o-e1489163907747-550x319_tilvjp.jpg"
)
e2 = Episode.create!(name:"Chuck E. Cheese’s: Where a Kid Can Learn Price Theory",
description: "The pizza-and-gaming emporium prides itself on affordability, which means its arcade games are really cheap to play. Does that lead to kids hogging the best games — and parents starting those infamous YouTube brawls?",
podcast_id: pcast12.id,
date: Date.new(2017, 03, 9),
no: 278,
duration: "31:22",
audio_url: "http://audio.wnyc.org/freakonomics_podcast/freakonomics_podcast030817.mp3",
image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489994403/6670430309_7d67d3a1f1_o-300x224_ycnbnx.jpg"
)
e3 = Episode.create!(name:"The Taboo Trifecta",
description: "Serial entrepreneur Miki Agrawal loves to talk about the bodily functions that make most people flinch. That’s why she’s building a business around the three P’s: periods, pee, and poop.",
podcast_id: pcast12.id,
date: Date.new(2017, 03, 2),
no: 277,
duration: "32:06",
audio_url: "http://audio.wnyc.org/freakonomics_podcast/freakonomics_podcast030117.mp3",
image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489994517/miki2-e1488312630847-550x544_gynf3r.jpg"
)
e4 = Episode.create!(name: "I'm Right, You're Wrong",
  description: "There are some topics about which it seems no amount of data will change people's minds: things like climate change, or restrictions on gun ownership. Neuroscientist Tali Sharot says that's actually for good reason. As a general rule, she says, it's better to stick to your beliefs and disregard new information that contradicts them. But this also means it's very difficult to change false beliefs. This week, we look at how we process information, and why it's so hard to change our views.",
  podcast_id: pcast11.id,
  date: Date.new(2017, 03, 13),
  no: 64,
  duration: "23:14",
  audio_url: "https://play.podtrac.com/npr-510308/npr.mc.tritondigital.com/NPR_510308/media/anon.npr-mp3/npr/hiddenbrain/2017/03/20170313_hiddenbrain_64.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489995208/misinfornedcustom_wide-4761b5abcc60dd914c3adc15f571544a232b0b67-s800-c85_omfjpl.png"
  )
e5 = Episode.create!(name: "Rebroadcast: Tribes and Traitors",
  description: "Nearly a year ago, we ran an episode about one of the world's most intractable divides: the Israeli–Palestinian conflict. Since that story aired, a solution seems even more out of reach. We wanted to play this episode again, because it offers something we don't often hear in the news: empathy for the other side.",
  podcast_id: pcast11.id,
  date: Date.new(2017, 03, 6),
  no: 24,
  duration: "30:27",
  audio_url: "https://play.podtrac.com/npr-510308/npr.mc.tritondigital.com/NPR_510308/media/anon.npr-mp3/npr/hiddenbrain/2017/03/20170306_hiddenbrain_24.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489996415/tribes-and-traitors-98a33627fdab1376ecbd933260e40678cefa79da-s800-c85_hmtz9l.jpg"
  )
e6 = Episode.create!(name: "I'm Not A Terrorist...",
  description: "Making jokes about politics is a tradition as old as America itself. These days, of course, comedians have a new target: President Donald Trump. We talk with Iranian-American comedian Maz Jobrani about finding humor in the midst of deep political divides, and how he uses an understanding of human nature to craft a successful punchline.",
  podcast_id: pcast11.id,
  date: Date.new(2017, 02, 27),
  no: 63,
  duration: "23:58",
  audio_url: "https://play.podtrac.com/npr-510308/npr.mc.tritondigital.com/NPR_510308/media/anon.npr-mp3/npr/hiddenbrain/2017/02/20170227_hiddenbrain_63.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1489996813/gettyimages-635158220-97b3ed6b307b5b8b938a23750052b3cf03dd3f0b-s700-c85_cvuiae.jpg"
  )
e7 = Episode.create!(name: "Get Out",
  description: "B & E dissect the new hit horror film from Jordan Peele, Get Out. We’ll dive into the way the film explores white supremacy, plays with point of view in horror films, and highlights the Black body.",
  podcast_id: pcast4.id,
  date: Date.new(2017, 03, 17),
  no: 62,
  duration: "1:04:43",
  audio_url:"https://media.acast.com/forcolorednerds/getout/media.mp3"
  )
e8 = Episode.create!(name: "FCN Live BHM Edition",
  description: "Join B & E for an XXL Black History Month LIVE edition of the show. Brittany and Eric will share what BHM means to them, test your knowledge of black history, and share their unconventional picks for the BHM pantheon. Joining them are special guests Tracy Clayton of BuzzFeed’s Another Round podcast and Rembert Browne of New York magazine.",
  podcast_id: pcast4.id,
  date: Date.new(2017, 03, 1),
  no: 61,
  duration: "1:29:04",
  audio_url: "https://media.acast.com/forcolorednerds/fcnlivebhmedition/media.mp3"
  )
e9 = Episode.create!(name: "Someday We'll All Be Free",
  description: "B & E dedicate this episode to a slept-on G.O.A.T. - the legendary Donny Hathaway. Revisiting his raw talent, unforgettable balladry, and why we need him today.",
  podcast_id: pcast4.id,
  date: Date.new(2017, 02, 6),
  no: 60,
  duration: "47:32",
  audio_url: "https://media.acast.com/forcolorednerds/somedaywellallbefree/media.mp3"
  )
e10 = Episode.create!(name: "Ask a Grown-Up",
  description: "Stories from people who need a grown-up. Featuring teenage girls asking for advice about their love lives and Ira's tribute to his very grown-up friend Mary.",
  podcast_id: pcast1.id,
  date: Date.new(2017, 03, 17),
  no: 612,
  duration: "1:04:10",
  audio_url: "http://www.podtrac.com/pts/redirect.mp3/podcast.thisamericanlife.org/podcast/612.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1490083206/612_enlarged_fcqugq.jpg"
  )
e12 = Episode.create!(name: "Rebroadcast: My Damn Mind",
  description: "The brain! It's powerful! Two stories of the brain working for and against its owners.",
  podcast_id: pcast1.id,
  date: Date.new(2017, 03, 10),
  no: 579,
  duration: "58:50",
  audio_url: "http://feedproxy.google.com/~r/talpodcast/~5/tpT1B8Baoe8/579.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1490083979/579_3enlarged_vowgrs.jpg"
  )
e11 = Episode.create!(name: "Vague and Confused",
  description: "A show about rules and what happens when they’re vague and randomly enforced.",
  podcast_id: pcast1.id,
  date: Date.new(2017, 03, 3),
  no: 611,
  duration: "1:03:51",
  audio_url: "http://www.podtrac.com/pts/redirect.mp3/podcast.thisamericanlife.org/extended/611.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1490084281/611-enlarged_apen2a.jpg"
  )
e13 = Episode.create!(name: "The Man Who Invented Facebook Ad Tracking Is Not Sorry",
  description: "After building the social network’s ad system, Antonio García Martínez tried to set his career on fire with a tell-all. An inside view on Face-versaries, terrifying emails from Zuck, and the cult of changing the world. Turns out, it takes a lot to get shunned in the Valley. Especially when you write a bestseller. The author of Chaos Monkeys, on the fallout from his attempt to commit career suicide.",
  podcast_id: pcast2.id,
  date: Date.new(2017, 03, 21),
  no: 86,
  duration: "22:02",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/notetoself/notetoself032217_cms744153_pod.mp3",
  image_url: "https://media2.wnyc.org/i/0/400/l/99/1/AP_537322114763.jpg"
  )
e14 = Episode.create!(name: "Government Secrets Worth Leaking... or Keeping?",
  description: "So, the C.I.A. has a back door to your phone. At least, according to the Vault 7 data dump from WikiLeaks. This week, when are these tactics really making our lives safer?",
  podcast_id: pcast2.id,
  date: Date.new(2017, 03, 14),
  no: 85,
  duration: "27:13",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/notetoself/notetoself031517_cms742537_pod.mp3"
  )
e15 = Episode.create!(name: "Will You Do a Snapchat Streak With Me?",
  description: "A little yellow ghost has joined Manoush’s home screen. This week, Note to Self takes the plunge into Snapchat. Where we find lots of opportunities for passive aggression, obligation, and shade. And that’s not a bug. It’s a feature. With designer Tristan Harris, of Time Well Spent, and Snapchat artist CyreneQ.",
  podcast_id: pcast2.id,
  date: Date.new(2017,03,7),
  no: 84,
  duration: "18:43",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/notetoself/notetoself030817_cms740978_pod.mp3"
  )
e16 = Episode.create!(name: "Andrew Forsthoefel: Deluded in the Desert",
  description: "A young man sets out on a 4,000 mile journey and becomes a magnet for stories along the way.",
  podcast_id: pcast3.id,
  date: Date.new(2017, 03, 21),
  no: 27,
  duration: "16:44",
  audio_url: "http://feeds.themoth.org/~r/themothpodcast/~5/-6QcpmdXSd4/moth_479_3_21_17.mp3",
  image_url: "https://res.cloudinary.com/fafafariba/image/upload/v1490248206/Andrew-Forsthoefel-Podcast-479-2_ubtrhn.jpg"
  )
e17 = Episode.create!(name: "The Moth Radio Hour: People, Places, Problems",
  description: "In this hour, a man whose mother never learned to read enrolls in law school.; a recent graduate runs in to familiar faces; an uber driver encounters an unruly passenger; a photo collage fails to capture the scope of a relationship; and a child's hair is shaved to save her life. The Moth Radio Hour is produced by The Moth and Jay Allison of Atlantic Public Media.

Ray Christian struggles to realize his dream of graduating from law school.

Alyssa Ladd is embarrassed to run into familiar faces while working at a Michaels craft store.

Nestor Gomez is stuck driving an unruly Uber passenger during rush hour.

Steven Carr is given a photo collage from his mother of he and his 'friend.'

Melanie Kostrezwa learns her daughter must undergo a craniotomy.",
  podcast_id: pcast3.id,
  date: Date.new(2017,03,14),
  no: 26,
  duration: "54:40",
  audio_url: "http://feeds.themoth.org/~r/themothpodcast/~5/mv7n5cTY68k/moth_478_mrh_1709_3_14_17-1.mp3"
  )
e18 = Episode.create!(name: "The Moth Radio Hour: Wedding Jitters and Kindergarten Battle Prep",
  description: "A basement fire leads to a wedding, a young man in Jamaica is obsessed with a comic book, a child from a strict home lets off steam with her two grandmothers and a protective father prepares to do battle with his kid’s school.",
  podcast_id: pcast3.id,
  date: Date.new(2017, 03, 7),
  no: 25,
  duration: "53:46",
  audio_url: "http://feeds.themoth.org/~r/themothpodcast/~5/2_NROEaZ330/moth_477_mrh_1624_3_7_17-1.mp3"
  )
e19 = Episode.create!(name: "Shots Fired: Part 1",
  description: "We join Ben Montgomery, a reporter at the Tampa Bay Times, as he looks at every person killed or injured by Florida police over six years. ",
  podcast_id: pcast5.id,
  date: Date.new(2017, 03, 17),
  no: 143,
  duration: "58:20",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/radiolab_podcast/radiolab_podcast17shotsfiredone.mp3",
  image_url: "https://media2.wnyc.org/i/620/372/c/80/1/3957814193_6fd835e7c0_o.jpg"
  )
e20 = Episode.create!(name: "Update: CRISPR",
  description: "In 2012, scientists had a realization: hidden inside one of the world’s smallest organisms, was one of the world’s most powerful tools.",
  podcast_id: pcast5.id,
  date: Date.new(2017, 02, 24),
  no: 142,
  duration: "52:25",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/radiolab_podcast/radiolab_podcast17updatecrispr.mp3"
  )
e21 = Episode.create!(name: "Radiolab Presents: Ponzi Supernova",
  description: "Madoff speaks.  Investigating the world's largest con with the team behind @Audible_com's #PonziSupernova.",
  podcast_id: pcast5.id,
  date: Date.new(2017, 02, 10),
  no: 141,
  duration: "40:35",
  audio_url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/radiolab_podcast/radiolab_podcast17ponzi.mp3"
  )
e21 = Episode.create!(name: "Raise Me Up",
  description: "--",
  podcast_id: pcast6.id,
  date: Date.new(2017, 03, 20),
  no: 299,
  duration: "42:00",
  audio_url: "http://rss.art19.com/episodes/99858ff9-9913-4812-9be3-0ed0ff80f215.mp3",
  image_url: "http://cloudfront.assets.stitcher.com/customfeedimages/480x270_16125.jpg"
  )
e22 = Episode.create!(name: "The Honest Conversation",
  description: "Bloaty McBloat.",
  podcast_id: pcast6.id,
  date: Date.new(2017, 03, 13),
  no: 298,
  duration: "51:58",
  audio_url: "http://rss.art19.com/episodes/802356cc-7350-4d0f-855a-d7718202ae99.mp3"
  )
e23 = Episode.create!(name: "The PC Rabbit Hole",
  description: "Skinny on salt.",
  podcast_id: pcast6.id,
  date: Date.new(2017, 03, 6),
  no: 297,
  duration: "41:41",
  audio_url: "http://rss.art19.com/episodes/575fc074-6fcf-4d94-a956-3360d4510c02.mp3"
  )
e24 = Episode.create!(name: "Ur Fave is Problematic",
  description: "How we spent the strike on International Women's Day. We answer listener questions about critically reading feminist thinkers, and keeping up on abortion rights laws. CheetoWatch: what's Kellyanne up to? Representative Steve King and other racist liars. Plus, Inspector Gadget and ALL of our problematic faves.",
  podcast_id: pcast7.id,
  date: Date.new(2017, 03, 17),
  no: 84,
  duration: "49:47",
  audio_url: "https://rss.art19.com/episodes/f1afc7e0-2a0a-41a3-a465-24f96cc3ff63.mp3",
  image_url: "https://static1.squarespace.com/static/566ea44e0e4c116bdc16c66c/t/58cb91379f74560b269e95d4/1489736000875/gadget.jpg"
  )
e25 = Episode.create!(name: "Obama Glow Up",
  description: "How did you spend International Women's Day? Thoughts on women's labor strikes of the '70s and now. Study shows that men are more aggro in the Trump era. Brief thoughts on La Croix, post-presidency Barack and the best wealthy communities for thrifting. Women are having too much fun to retire. And, staying politically engaged in a red state.",
  podcast_id: pcast7.id,
  date: Date.new(2017, 03, 10),
  no: 83,
  duration: "50:05",
  audio_url: "https://rss.art19.com/episodes/fc9ab402-0850-4df2-99da-c6ff1013fcdd.mp3"
  )
e26 = Episode.create!(name: "It's a Trap!",
  description: "'90s icons return: Amina discovers the sexiness of Keanu Reeves & there's a new ::fire emoji:: Calvin Klein campaign featuring the cast of Moonlight. This week in menstruation, that labia glue to stop period flow you heard about? It's a real patent, but also fake news. Cheeto Watch continues as Kellyanne gets too comfortable in the Oval Office and HBCU leaders realize they got played. Plus, a 'feminist' manifesto.",
  podcast_id: pcast7.id,
  date: Date.new(2017, 03, 3),
  no: 82,
  duration: "50:12",
  audio_url: "https://rss.art19.com/episodes/8b32a7cc-9da3-4212-bc1d-5f6781c8cab8.mp3"
  )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )
# e15 = Episode.create!(name: "",
#   description: "",
#   podcast_id: ,
#   date: Date.new(2017, ,),
#   no: ,
#   duration: ":",
#   audio_url: "",
#   image_url: ""
#   )


## PLAYLISTS
plist1 = Playlist.create!(name: "Podcast Jamz", user_id: tester.id)
plist2 = Playlist.create!(name: "Morning Jamz", user_id: tester.id)

#tracks
t1 = Track.create!(playlist_id: plist1.id, episode_id: e10.id)
t1 = Track.create!(playlist_id: plist1.id, episode_id: e6.id)
t1 = Track.create!(playlist_id: plist1.id, episode_id: e1.id)
t1 = Track.create!(playlist_id: plist1.id, episode_id: e4.id)
t1 = Track.create!(playlist_id: plist1.id, episode_id: e7.id)
