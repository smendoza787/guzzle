# Guzzle :beers:

Guzzle (Formerly DrinksUp) is intended to be a one-stop-shop for bartenders looking for tools to make their lives easier.

As of now, it uses the Google Places API to fetch data for bars around your current location, and uses the Unsplash API for stock photos.

### Features Under Contruction
	- Tip Tracker
	- Cocktail Recipes

## To Run:

1. `git clone` the repository
2. `cd guzzle`
3. `bundle && cd client && npm install && cd ..` to install dependencies for Ruby and JavaScript applications
4. `rails db:migrate`
5. run `rails start` to start up rails and webpack servers

## API Endpoints

* `POST /api/google_places`

	- include `latitude` and `longitude` in your POST request to get information on your nearest bars

* `GET /api/unsplash`

	- generates a random bar-related photo from Unsplash

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/smendoza787/guzzle. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/smendoza787/guzzle/blob/master/CONTRIBUTING.md) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://github.com/smendoza787/guzzle/blob/master/LICENSE).
