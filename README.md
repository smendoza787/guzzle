# DrinksUp :beers:

DrinksUp is an app for finding your next local watering hole!

It uses the Google Places API to fetch data for bars around your current location, and uses the Unsplash API for stock photos.

## To Run:

1. `git clone` the repository
2. `cd drinks-up`
3. `bundle && cd client && npm install && cd ..` to install dependencies for Ruby and JavaScript applications
4. `rake db:migrate`
5. run `rake start` to start up rails and webpack servers

## API Endpoints

* `POST /api/google_places`

	- include `latitude` and `longitude` in your POST request to get information on your nearest bars

* `GET /api/unsplash`

	- generates a random bar-related photo from Unsplash

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/smendoza787/drinks-up. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/smendoza787/drinks-up/blob/master/CONTRIBUTING.md) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://github.com/smendoza787/drinks-up/blob/master/LICENSE).
