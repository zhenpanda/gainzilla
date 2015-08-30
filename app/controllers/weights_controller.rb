class WeightsController < ApplicationController

  def create
  	@weight = Weight.new(weight: weight_params, user_id: session[:current_user_id])
  end

  def weight_params
    params.require(:weight).permit(:weight)
  end

end
