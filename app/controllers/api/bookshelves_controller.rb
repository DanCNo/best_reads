class Api::BookshelvesController < ApplicationController

  before_action :ensure_logged_in, only: [:create]
  before_action :bookshelf_owner, only: [:destroy, :update]

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)

    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 401
    end 
  end

  def update
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf.update(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end 


  end

  def index
    @bookshelves = Bookshelf.where(user_id: params[:user_id])
    @bookshelves = Bookshelf.all
    
    if @bookshelves
      render :index
    else
      render json: ["No bookshelves found here"], status: 404
    end

  end

  def show
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf
      render :show
    else
      render json: ["Bookshelf not found here"], status 404
  end

  def destroy
    if @bookshelf.default == true
      render json: ["Not allowed to destroy default bookshelves"], status 401
    else
      @bookshelf.destroy
      render :show
    end
  end

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :default, :user_id)
  end

  def bookshelf_owner
    @bookshelf = Bookshelf.find(params[:id])

    render json: ["This is not your bookshelf!"], status: 401 unless @bookshelf.user == current_user
  end

end