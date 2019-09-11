class CommentsController < ApplicationController

  def create
    @recipe = Recipe.(params[:recipe_id])
    @comment = @recipe.comments

end