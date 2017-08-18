# DrinkUp :beers:

DrinkUp is an app for finding your next local watering hole!

It uses the Google Places API to fetch data for bars around your current location, and uses the Unsplash API for stock photos.

## To Run:

1. `git clone` the repository
2. `cd drinks-on-me-api`
3. `bundle && cd client && npm install && cd ..`
4. `rake db:migrate`
5. run `rake start` to start up rails and react webpack servers

## API Endpoints

So far DrinkUp only has one API endpoint:

`/api/bars`

I plan on adding more as I work on the project and gather more data.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/smendoza787/drinks-on-me-api. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/smendoza787/drinks-on-me-api/blob/master/CONTRIBUTING.md) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://github.com/smendoza787/drinks-on-me-api/blob/master/LICENSE).