class Recipes < ActiveRecord::Migration[5.2]

  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredient
      t.text :instruction
      t.string :preptime
      t.string :serving_size
      t.references :agerange
      t.text :visual
      t.timestamps
    end
  end
end