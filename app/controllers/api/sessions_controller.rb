class SessionsController < ApplicationController

	def new
		@user = User.new
	end

	def create

		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])

		if @user
			login(@user)
			render "api/users/show"
		else
			render json: ["Invalid credentials"], status: 401
		end

	end 

	def destroy
		@user = current_user
	if @user
		logout!
		render "api/users/show"
	else
		render json: ["Nobody logged in"], satus: 404
	end

end