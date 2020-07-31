# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Head.destroy_all
LeftArm.destroy_all
RightArm.destroy_all
Body.destroy_all
Leg.destroy_all
User.destroy_all
Monster.destroy_all


Head.create(name: "Green", url: "https://i.imgur.com/saLijLa.png" )
Head.create(name: "Red", url: "https://i.imgur.com/Qr4jXZU.png" )
Head.create(name: "Bunny", url: "https://i.imgur.com/aA4zgyo.png" )
Head.create(name: "Croc", url: "https://i.imgur.com/1Mj30nk.png" )
Head.create(name: "2x4", url: "https://i.imgur.com/9T7a03E.png" )
Head.create(name: "Squid", url: "https://i.imgur.com/g3UmEKo.png" )


LeftArm.create(name: "Green", url: "https://i.imgur.com/efc1OYI.png")
LeftArm.create(name: "Red", url: "https://i.imgur.com/ETU3w6C.png")
LeftArm.create(name: "Tentacle", url: "https://i.imgur.com/rx97zAU.png")
LeftArm.create(name: "Tiger", url: "https://i.imgur.com/U0EnSeX.png")
LeftArm.create(name: "Wrestler", url: "https://i.imgur.com/EnQau9g.png")
LeftArm.create(name: "Guy", url: "https://i.imgur.com/2VorliF.png")


RightArm.create(name: "Green", url: "https://i.imgur.com/oq9Uq6s.png")
RightArm.create(name: "Red", url: "https://i.imgur.com/24wu4Sk.png")
RightArm.create(name: "Tentacle", url: "https://i.imgur.com/J1yxfNX.png")
RightArm.create(name: "Tiger", url: "https://i.imgur.com/z2SwhkF.png")
RightArm.create(name: "Wrestler", url: "https://i.imgur.com/n45Iqlx.png")
RightArm.create(name: "Guy", url: "https://i.imgur.com/wmknfVL.png")


Body.create(name: "Green", url: "https://i.imgur.com/cLPD1Rl.png")
Body.create(name: "Red", url: "https://i.imgur.com/CLVhkmh.png")
Body.create(name: "Tanktop", url: "https://i.imgur.com/kvTspiL.png")
Body.create(name: "Coconut", url: "https://i.imgur.com/hsBasSe.png")
Body.create(name: "Gorilla", url: "https://i.imgur.com/ueHgkNj.png")


Leg.create(name: "Green", url: "https://i.imgur.com/i7aPPey.png")
Leg.create(name: "Red", url: "https://i.imgur.com/yiLDoWE.png")
Leg.create(name: "Basilisk", url: "https://i.imgur.com/Tiqqmuy.png")
Leg.create(name: "Spider", url: "https://i.imgur.com/QEecKhy.png")
Leg.create(name: "Sasquatch", url: "https://i.imgur.com/bfQMSqV.png")


User.create(name: "Rudy")


Monster.create(name: "Donovan", left_arm_id: rand(3..6), right_arm_id: rand(3..6), body_id: rand(3..5), leg_id: rand(3..5), head_id: rand(3..6), user_id: 1)
Monster.create(name: "Henry", left_arm_id: rand(3..6), right_arm_id: rand(3..6), body_id: rand(3..5), leg_id: rand(3..5), head_id: rand(3..6), user_id: 1)
Monster.create(name: "Sally", left_arm_id: rand(3..6), right_arm_id: rand(3..6), body_id: rand(3..5), leg_id: rand(3..5), head_id: rand(3..6), user_id: 1)
Monster.create(name: "Killer", left_arm_id: rand(3..6), right_arm_id: rand(3..6), body_id: rand(3..5), leg_id: rand(3..5), head_id: rand(3..6), user_id: 1)
