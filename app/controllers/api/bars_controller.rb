class Api::BarsController < ApplicationController
  def index
    @bars = Bar.all
    render json: @bars
  end

  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render json: @bar
    else
      render json: { errors: {message: "This Bar Failed To Save" }}
    end
  end

  private
    def bar_params
      params.require(:bar).permit(:name, :address, :city, :state, :rating)
    end
end
