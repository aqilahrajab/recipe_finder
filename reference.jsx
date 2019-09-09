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



                    <div id  = "filterbox">
                                <p> Find by <strong>ingredients:</strong></p>

                                <p id="vegetables">
                                      <a class="btn btn-light" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                        <img src= "vegetable_logo.png" style = "width: 30px"/>
                                        VEGETABLES
                                      </a>
                                </p>

                                <div class="collapse" id="collapseExample1">
                                          <div class="card card-body">
                                                <%= check_box_tag(:recipe) %>
                                                    <%= label_tag(:recipe, "Brocolli") %>
                                                    <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Spinach") %>
                                          <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Tomatoes") %>
                                          <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Carrots") %>

                                          </div>
                                </div>

                                <hr/>

                                <p id="grains">
                                      <a class="btn btn-light" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                        <img src= "grain_logo.png" style = "width: 30px"/>
                                        GRAINS
                                      </a>
                                </p>

                                <div class="collapse" id="collapseExample2">
                                          <div class="card card-body">
                                                <%= check_box_tag(:recipe) %>
                                                    <%= label_tag(:recipe, "Rice") %>
                                                    <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Barley") %>
                                          <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Quinoa") %>
                                          <%= check_box_tag(:recipe) %>
                                          <%= label_tag(:recipe, "Couscous") %>
                                          </div>
                                </div>

                                <hr/>

                                <p id="proteins">
                                      <a class="btn btn-light" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                        <img src= "protein_logo.png" style = "width: 30px"/>
                                        PROTEINS
                                      </a>
                                </p>

                                <div class="collapse" id="collapseExample3">
                                          <div class="card card-body">
                                                <%= check_box_tag(:recipe) %>
                                                    <%= label_tag(:recipe, "Fish") %>
                                                    <%= check_box_tag(:recipe) %>
<%= label_tag(:recipe, "Chicken") %>
<%= check_box_tag(:recipe) %>
<%= label_tag(:recipe, "Beef") %>
<%= check_box_tag(:recipe) %>
<%= label_tag(:recipe, "Prawn") %>
                                          </div>
                                </div>
                    </div>




<%= link_to "Fish", recipes_path(:search =>"Fish") %>
<%= link_to "Chicken", recipes_path(:search =>"Chicken") %>
<%= link_to "Beef", recipes_path(:search =>"Beef") %>
<%= link_to "Prawn", recipes_path(:search =>"Prawn") %>


<%= link_to "Brocolli", recipes_path(:search =>"Brocolli") %>
<%= link_to "Spinach", recipes_path(:search =>"Spinach") %>
<%= link_to "Tomatoes", recipes_path(:search =>"Tomatoes") %>
<%= link_to "Carrots", recipes_path(:search =>"Carrots") %>


<%= link_to "Rice", recipes_path(:search =>"Rice") %>
<%= link_to "Barley", recipes_path(:search =>"Barley") %>
 <%= link_to "Quinoa", recipes_path(:search =>"Quinoa") %>
<%= link_to "Couscous", recipes_path(:search =>"Couscous") %>