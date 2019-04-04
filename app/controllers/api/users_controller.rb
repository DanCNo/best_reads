class Api::UsersController < ApplicationController

  def create

    @user = User.new(user_params)

    if @user.save
      login(@user)
      Bookshelf.create!({title: "Read", default: true, user_id: @user.id})
      Bookshelf.create!({title: "Currently Reading", default: true, user_id: @user.id})
      Bookshelf.create!({title: "Want to Read", default: true, user_id: @user.id})

      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end