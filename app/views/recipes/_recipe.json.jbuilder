json.extract! recipe, :id, :name, :ingredient, :instructions, :preptime, :serving_size, :agerange, :visuals, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
