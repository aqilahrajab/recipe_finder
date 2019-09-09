create_table :parks_rangers do |t|
  t.references :park
  t.references :ranger
  t.timestamps
end


create_table :rangers do |t|
  t.string :name
  t.timestamps
end

  :name =>'Apricot puree',
  :ingredient => 'Apricot',
  :instructions => '
1. Wash and soak rice for 30 minutes. Drain, then add 3 cups. Bring 1 cup of water to a boil in a small pot, add carrots, apricots, minced chicken and Chicken #AnyaMealsStock.
2. Stir well and simmer for 30 minutes.
3. Wash quinoa grains, drain and combine with 2.5 cups of water.',
  :preptime =>'30 minutes',
  :serving_size => '1-2 meals',
  :agerange => '1 year and above',
  :visuals =>'recipe1.jpg'
)

#RECIPE 3
Recipe.create(
  :name =>'Air Fry Snapper',
  :ingredient => 'Snapper',
  :instructions => '
1. Bring 1 cup of water to a boil in a small pot, add carrots, apricots, minced chicken and Chicken #AnyaMealsStock.
2. Stir well and simmer for 30 minutes.
3. Wash quinoa grains, drain and combine with 2.5 cups of water.
',
  :preptime =>'30 minutes',
  :serving_size => '1-2 meals',
  :agerange => '1 year and above',
  :visuals =>'recipe1.jpg'
)

#RECIPE 4
Recipe.create(
  :name =>'Sesame Oil Chicken',
  :ingredient => 'Snapper',
  :instructions => '
1. Sauté ginger and garlic in sesame and olive oil till fragrant.
2. Add chicken, and continue to sauté till outside is cooked.
3. Add water, black fungus, red dates and Chicken Stock and bring to a boil. Reduce to a simmer.
',
  :preptime =>'40 minutes',
  :serving_size => '1-3 meals',
  :agerange => '1 year and above',
  :visuals =>'recipe1.jpg'
)

#RECIPE 5
Recipe.create(
  :name =>'Tumeric Rice',
  :ingredient => 'Tumeric',
  :instructions => '
1. Add all ingredients into a rice cooker pot, including water. Mix well.
2. Leave it to steam in the rice cooker and serve at an appropriate temperature when it’s done!
3. Feel free to replace prawns and scallops with low mercury fish such as threadfin, salmon, cod, sole, flounder, etc. For more info, watch our FAQ highlights!
',
  :preptime =>'20 minutes',
  :serving_size => '1-3 meals',
  :agerange => '1 year and above',
  :visuals =>'recipe1.jpg'
)

  :name =>'Takikomi Rice',
  :ingredient => 'Rice',
  :instructions => '
1. Wash and soak rice for 30 minutes. Drain, then add 3 cups of water."+ <br/>"
2. Add frozen vegetables, #AnyaMealsStock, and liquid aminos. "+ <br/>"
3. Top with clean Shimeiji mushrooms, unsalted butter and season with pepper. "+ <br/>"',
  :preptime =>'20 minutes',
  :serving_size => '1-2 toddlers',
  :agerange => '1 year and above',
  :visuals =>'recipe1.jpg'
)

        <p>
            <h1> Search By Recipe </h1>
                <%= form_tag(recipes_path method: :get) do %>
                <%= text_field_tag :search, params[:name, :ingredient]%>
                <%= submit_tag 'Search', name: nil %>
                <% end %>
        <p>