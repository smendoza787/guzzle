class Location < ApplicationRecord
	attr_accessor :address, :latitude, :longitude
	reverse_geocoded_by :latitude, :longitude,
		:address => :location
	after_validation :reverse_geocode, :if => :latitude_changed?
end
