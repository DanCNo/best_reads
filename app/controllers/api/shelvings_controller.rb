class Api::ShelvingsController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :destroy]

  def create
    @shelving = Shelving.new(shelving_params)
    
    if @shelving.save
      # @book = Book.find(@shelving.book_id)
      render "api/shelvings/show"
    else
      render json: ["This book already exists"], status: 401
    end
  end

  def destroy
    @shelving = Shelving.find(params[:id])
    if @shelving
      # bookId = @shelving.book_id
      @shelving.destroy
      # @book = Book.find(bookId)
      render "api/shelvings/show"
    else
      render json ["Book not found"], status: 404
    end
  end

  def shelving_params
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end

end