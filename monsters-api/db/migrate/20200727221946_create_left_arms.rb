class CreateLeftArms < ActiveRecord::Migration[6.0]
  def change
    create_table :left_arms do |t|
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
