# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_27_231915) do

  create_table "bodies", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "heads", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "left_arms", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "legs", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.integer "left_arm_id", null: false
    t.integer "right_arm_id", null: false
    t.integer "body_id", null: false
    t.integer "leg_id", null: false
    t.integer "head_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["body_id"], name: "index_monsters_on_body_id"
    t.index ["head_id"], name: "index_monsters_on_head_id"
    t.index ["left_arm_id"], name: "index_monsters_on_left_arm_id"
    t.index ["leg_id"], name: "index_monsters_on_leg_id"
    t.index ["right_arm_id"], name: "index_monsters_on_right_arm_id"
    t.index ["user_id"], name: "index_monsters_on_user_id"
  end

  create_table "right_arms", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "monsters", "bodies"
  add_foreign_key "monsters", "heads"
  add_foreign_key "monsters", "left_arms"
  add_foreign_key "monsters", "legs"
  add_foreign_key "monsters", "right_arms"
  add_foreign_key "monsters", "users"
end
