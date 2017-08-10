class Api::BarsController < ApplicationController
  def index
    @bars = Bar.all
    render json: @bars
  end
end
