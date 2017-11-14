class Api::LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]

  # get list of spots
  def google_places
    @client = GooglePlaces::Client.new(ENV['GOOGLE_API_KEY'])
    @results = @client.spots(params[:latitude], params[:longitude], :name => 'bar', :types => ['bar', 'night_club'], :radius => 10000)
    @spots = @results.map do |spot|
      spot.place_id = spot.id
      spot
    end
    render json: @spots
  end

  # get unsplash photo
  def unsplash
    @search_results = Unsplash::Photo.search("bar", rand(5))
    render json: { url: @search_results[rand(10)].table.urls.regular }
  end

  # unsplash api
  def foursquare
    client = Foursquare2::Client.new(:client_id => ENV['FOURSQUARE_CLIENT_ID'], :client_secret => ENV['FOURSQUARE_CLIENT_SECRET'], :api_version => '20171101')
    venues = client.search_venues(:ll => "#{params[:latitude]},#{params[:longitude]}", :query => 'bars')
    venues_with_photos = venues.venues.map do |venue|
      photos = client.venue_photos(venue.id).items
      venue.photo = photos[0]
      venue
    end
    render json: venues_with_photos
  end

  # geocoding location string into coordinates
  def coordinates
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: "ERROR"
    end
  end

  # GET /locations
  def index
    @locations = Location.all

    render json: @locations
  end

  # GET /locations/1
  def show
    render json: @location
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:address, :latitude, :longitude)
    end
end
