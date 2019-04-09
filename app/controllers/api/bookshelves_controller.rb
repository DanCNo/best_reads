class Api::BookshelvesController < ApplicationController

  before_action :ensure_logged_in, only: [:create]
  # before_action :bookshelf_owner, only: [:destroy, :update]

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.default = false;
    @bookshelf.user_id = current_user.id;

    if @bookshelf.save
      @books = []
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
    @bookshelves = Bookshelf.where(user_id: current_user.id)
    
    if @bookshelves
      render :index
    else
      render json: ["No bookshelves found here"], status: 404
    end

  end

  def show
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf
      @books = @bookshelf.books || []
      render :show
    else
      render json: ["Bookshelf not found here"], status: 404
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    id = params[:id];
    if @bookshelf
      if @bookshelf.default
        render json: ["Not allowed to destroy default bookshelves"], status: 401
      else
        @bookshelf.destroy
        render json: id
      end
    else
      render json: ["Bookshelf not found"], status: 404
    end
  end

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :user_id)
  end

  def bookshelf_owner
    @bookshelf = Bookshelf.find(params[:id])

    render json: ["This is not your bookshelf!"], status: 401 unless @bookshelf.user == current_user
  end

end