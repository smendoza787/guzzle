Rails.application.routes.draw do
  namespace :api do
    resources :bars
    resources :locations

    post '/google_places', to: 'locations#google_places'
    post '/coordinates', to: 'locations#coordinates'
    get '/unsplash', to: 'locations#unsplash'
    get '/foursquare', to: 'locations#foursquare'
  end
end
