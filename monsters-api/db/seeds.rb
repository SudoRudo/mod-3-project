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
LeftArm.create(name: "Green", url: "https://i.imgur.com/efc1OYI.png")
RightArm.create(name: "Green", url: "https://i.imgur.com/oq9Uq6s.png")
Body.create(name: "Green", url: "https://i.imgur.com/cLPD1Rl.png")
Leg.create(name: "Green", url: "https://i.imgur.com/i7aPPey.png")

Head.create(name: "Red", url: "https://i.imgur.com/Qr4jXZU.png" )
LeftArm.create(name: "Red", url: "https://i.imgur.com/ETU3w6C.png")
RightArm.create(name: "Red", url: "https://i.imgur.com/24wu4Sk.png")
Body.create(name: "Red", url: "https://i.imgur.com/CLVhkmh.png")
Leg.create(name: "Red", url: "https://i.imgur.com/yiLDoWE.png")

User.create(name: "Rudy")

Monster.create(name: "baby", left_arm_id: 1, right_arm_id: 1, body_id: 1, leg_id: 1, head_id: 1, user_id: 1)
Monster.create(name: "poop", left_arm_id: 1, right_arm_id: 2, body_id: 1, leg_id: 2, head_id: 1, user_id: 1)
Monster.create(name: "babypoop", left_arm_id: 2, right_arm_id: 2, body_id: 2, leg_id: 2, head_id: 2, user_id: 1)