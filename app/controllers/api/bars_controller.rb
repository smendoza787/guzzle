class Api::BarsController < ApplicationController
  def index
    @bars = Bar.all
    render json: @bars
  end

  def create
    @bar = Bar.find_by(bar_params)
    if @bar
      render json: @bar
    else
      @bar = Bar.create(bar_params)
      render json: @bar
    end
  end

  def destroy
    @bar = Bar.find_by(place_id: params[:id])
    @bar.destroy
    render json: @bar
  end

  private
    def bar_params
      params.require(:bar).permit(:name, :address, :city, :state, :rating, :vicinity, :place_id)
    end
end
