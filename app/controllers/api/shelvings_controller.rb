class Api::ShelvingsController < ApplicationController

  before_action :ensure_logged_in, only: [:create]

  def create
    @shelving = Shelving.new(shelving_params)

    if @shelving.save
      render :show
    else
      render json: ["This book already exists"], status: 401
    end
  end

  def destroy
    @shelving = Shelving.find(shelving_params)

    if @shelving
      @shelving.destroy
    else
      render json ["Book not found"], status: 404
    end
  end

  def shelving_params
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end

end