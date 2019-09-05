class CreateRecipes < ActiveRecord::Migration[5.2]

  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredient
      t.text :instructions
      t.string :preptime
      t.string :serving_size
      t.string :agerange
      t.text :visuals

      t.timestamps
    end
  end
end