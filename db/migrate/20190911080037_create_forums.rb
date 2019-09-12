class CreateForums < ActiveRecord::Migration[5.2]
  def change
    create_table :forums do |t|
      t.text :title
      t.text :visual
      t.string :name
      t.text :message
      t.timestamps
    end
  end
end