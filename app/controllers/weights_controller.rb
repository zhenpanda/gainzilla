class WeightsController < ApplicationController
  
  #needed for post route
  def new
  	@weight = Weight.new	
  end

  def create
  	#binding.pry
  	@weight = Weight.create({
  		weight: params[:weight][:wieght].to_f,
  		user_id: session[:current_user_id]
  		})
  	redirect_to new_weight_path 
  end

end
