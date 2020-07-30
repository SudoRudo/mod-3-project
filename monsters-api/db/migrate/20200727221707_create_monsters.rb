class CreateMonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :monsters do |t|
      t.string :name
      t.references :left_arm, null: false, foreign_key: true
      t.references :right_arm, null: false, foreign_key: true
      t.references :body, null: false, foreign_key: true
      t.references :leg, null: false, foreign_key: true
      t.references :head, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
