class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user).reverse_chronological.all
  end

  def show
    @post = Post.find(params[:id])
  end
end
