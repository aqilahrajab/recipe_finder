
Agerange.create( :agerange => 'less than 9 months')
Agerange.create( :agerange => '9 months to 12 months')
Agerange.create( :agerange => '12 months and above')


# RECIPE 1
Recipe.create(
  :name => 'Air Fry Snapper',
  :ingredient =>'
  1 Snapper Fish,
  2 Tomatoes,
  Cucumber,
  Salt and pepper,
  Olive Oil',
  :instruction => '
  1. Bring 1 cup of water to a boil in a small pot, add carrots, apricots, minced chicken and Chicken #AnyaMealsStock.
  2. Stir well and simmer for 30 minutes.
  3. Wash quinoa grains, drain and combine with 2.5 cups of water.',
  :preptime => '30 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 2,
  :visual => 'recipe1.jpg'
)

# RECIPE 2
Recipe.create(
  :name => 'Apricot puree',
  :ingredient =>'
  2 Apricot blended<br/>
  1 cup of Milk<br/>
  1 table spoon Honey',
  :instruction => '
  1.Blend the Apricot<br>
  2. Mix the Apricot well with milk and honey under low heat',
  :preptime => '20 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 1,
  :visual => 'recipe1.jpg'
)

# RECIPE 3
Recipe.create(
  :name => 'Sesame Oil Chicken',
  :ingredient =>'
  1 chicken<br/>
  Sesame Oil<br/>
  1 cup Chicken Stock<br/>',
  :instruction => '
1. Sauté ginger and garlic in sesame and olive oil till fragrant.<br/>
2. Add chicken, and continue to sauté till outside is cooked.<br/>
3. Add water, black fungus, red dates and Chicken Stock and bring to a boil. Reduce to a simmer.<br/>',
  :preptime => '20 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 3,
  :visual => 'recipe1.jpg'
)

# RECIPE 4
Recipe.create(
  :name => 'Tumeric Rice',
  :ingredient =>'
  1 cup Rice<br/>
  1/2 teaspoon Tumeric<br/>
  Tomatoes<br/>',
  :instruction => '
1. Sauté ginger and garlic in sesame and olive oil till fragrant.<br/>
2. Add chicken, and continue to sauté till outside is cooked.<br/>
3. Add water, black fungus, red dates and Chicken Stock and bring to a boil. Reduce to a simmer.<br/>',
  :preptime => '20 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 3,
  :visual => 'recipe1.jpg'
)

# RECIPE 5
Recipe.create(
  :name => 'Takikomi Poridge',
  :ingredient =>'
  1 cup Rice<br/>
  1 cup Frozen Vegetables<br/>
  1 cup Mushrooms<br/>',
  :instruction => '
1. Wash and soak rice for 30 minutes. Drain, then add 3 cups of water.<br/>
2. Add frozen vegetables, #AnyaMealsStock, and liquid aminos.<br/>
3. Top with clean Shimeiji mushrooms, unsalted butter and season with pepper. <br/>',
  :preptime => '20 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 2,
  :visual => 'recipe1.jpg'
)

# RECIPE 6
Recipe.create(
  :name => 'Fish Porridge',
  :ingredient =>'
  1 cup Brown Rice
  1 cup Frozen Vegetables<br/>
  1 cup Fish Stock<br/>',
  :instruction => '
1. Wash and soak rice for 30 minutes. Drain, then add 3 cups of water.<br/>
2. Add frozen vegetables, #AnyaMealsStock, and liquid aminos.<br/>
3. Top with clean Shimeiji mushrooms, unsalted butter and season with pepper. <br/>',
  :preptime => '40 minutes',
  :serving_size => '1-2 meals',
  :agerange_id => 2,
  :visual => 'recipe1.jpg'
)


# IngredientRecipe.create(
#   :ingredient => 1,
#   :recipe => 1
# )

# IngredientRecipe.create(
#   :ingredient => 2,
#   :recipe => 1
# )

# IngredientRecipe.create(
#   :ingredient => 3,
#   :recipe => 1
# )


# Group.create( :group => 'Grains')
# Group.create( :group => 'Proteins')
# Group.create( :group => 'Vegetables')

# Ingredient.create(
#   :ingredient => 'Snapper Fish',
#   :quantity => '1 piece',
#   :group_id => 2
# )

# Ingredient.create(
#   :ingredient => 'Carrot',
#   :quantity => '1 carrot',
#   :group_id => 3
# )

# Ingredient.create(
#   :ingredient => 'Rice',
#   :quantity => '1 cup',
#   :group_id => 1
# )