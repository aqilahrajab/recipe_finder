class Ageranges < ActiveRecord::Migration[5.2]
  def change
    create_table :ageranges do |t|
      t.string :agerange
    end
  end
end