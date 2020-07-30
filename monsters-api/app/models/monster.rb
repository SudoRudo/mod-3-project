class Monster < ApplicationRecord
  belongs_to :left_arm
  belongs_to :right_arm
  belongs_to :body
  belongs_to :leg
  belongs_to :head
  belongs_to :user
end
