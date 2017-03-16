# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Podcast.destroy_all
guest = User.create!(name: "Guest", email: "guest@guest.com", password:"beourguest")
tester = User.create!(name: "Fariba", email: "a", password: "asdfjk")
pcast1 = Podcast.create!(name: "This American Life",
  description: "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 1.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards.",
  category: "Society & Culture",
  image_url: "http://cloudfront.assets.stitcher.com/feedimagesplain328/4903.jpg",
  thumb_url: "http://is1.mzstatic.com/image/thumb/Music71/v4/03/3c/f1/033cf19b-a70e-108f-2d77-82c5b8c8cde0/source/170x170bb.jpg",
  link: "http://www.thisamericanlife.org",
  );
