class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  # GET /recipes
  # GET /recipes.json
  def index

    @recipe = Recipe.all
      if params[:search]
        @recipe = Recipe.search(params[:search]).order("created_at DESC")
      else
        @recipe = Recipe.all.order("created_at DESC")
      end

      @age = Agerange.all
      if params[:searchage]
        p "------------"
        p params[:searchage]
        @age = Agerange.where({agerange: params[:searchage]})

         ageId = @age[0].id
         @recipe = Recipe.where({agerange_id: ageId})

         p @recipe
      end

  end


  # GET /recipes/1
  # GET /recipes/1.json
  def show
     recipenum = Recipe.find(params[:id]).agerange_id
     @age= Agerange.find(agerange_id = recipenum)

      recipeNumIng = Recipe.find(params[:id]).ingredient
      @ingredient = recipeNumIng.split(",");

      recipeNumIns = Recipe.find(params[:id]).instruction
      @instruction = recipeNumIns.split(".");

  end

  # GET /recipes/new
  def new
    @recipe = Recipe.new
    @agerange = Agerange.all
  end

  # GET /recipes/1/edit
  def edit

    recipenum = Recipe.find(params[:id]).agerange_id
    @age= Agerange.find(agerange_id = recipenum)
    @agerange = Agerange.all
  end

  # POST /recipes
  # POST /recipes.json
  def create
    @recipe = Recipe.new(recipe_params)

    respond_to do |format|
      if @recipe.save
        format.html { redirect_to @recipe, notice: 'Recipe was successfully created.' }
        format.json { render :show, status: :created, location: @recipe }
      else
        format.html { render :new }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end



  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.html { redirect_to @recipe, notice: 'Recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.html { render :edit }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      params.require(:recipe).permit(:name, :ingredient, :instruction, :preptime, :serving_size, :agerange, :visual, :search, :agerange_id)
    end
end