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

  def show
    @bar = Bar.find_by(id: params[:id])
    if @bar
      render json: @bar
    else
      render json: { errors: {message: "Bar Could Not Be Found" }}
    end
  end

  private
    def bar_params
      params.require(:bar).permit(:name, :address, :city, :state, :rating)
    end
end
