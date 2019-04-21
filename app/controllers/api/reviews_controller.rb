class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :destroy, :update]
# before_action :review_owner, only: [:destroy, :update]

  def create
    @review = Review.new(review_params)
    
    if @review.save  
      render "api/reviews/show"
    else
      render json: ["This review already exists"], status: 401
    end
  end

  def show
    @review = Review.find(params[:id])

    if @review
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end 

  def index
    @reviews = Review.all
    render :index
  end 

  def update
    @review = current_user.reviews.find(params[:id])

    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: ["Update failed"], status: 401
    end

  def destroy
    
    @review = Review.find(params[:id])

    if @review     
      @review.destroy      
      render "api/reviews/show"
    else
      render json ["Review not found"], status: 404
    end
  end

  def review_params
    params.require(:review).permit(:rating, :book_id, :author_id, :body)
  end

  def review_owner
    @review = Review.find(params[:id])

    render json: ["This is not your review!"], status: 401 unless @review.author == current_user
  end

end