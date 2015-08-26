class UsersController < ApplicationController

	  def create
	    @user = User.new(user_params)
	  if @user.save
	    redirect_to root_url, :notice => "Signed up!"
	  else
	    render "new"
	  end

	  private

	  def user_params
	    params.require(:user).permit(:name, :password, :salt, :encrypted_password)
	  end
end
