json.extract! recipe, :id, :name, :ingredient, :instruction, :preptime, :serving_size, :agerange, :visual, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)