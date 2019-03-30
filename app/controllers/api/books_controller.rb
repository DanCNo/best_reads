class Api::BooksController < ApplicationController

  def create

    @book = Book.new(book_params)

    if @book.save
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end

  end

  def show
    @book = Book.find(params[:id])
    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def index
    @books = Book.all
    render :index
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end


  def book_params
    params.require(:book).permit(:title, :description, :author, :pages, :year_published)
  end
  
end