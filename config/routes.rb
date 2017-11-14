Rails.application.routes.draw do
  namespace :api do
    resources :bars
    resources :locations

    post '/google_places', to: 'locations#google_places'
    post '/foursquare', to: 'locations#foursquare'
    post '/coordinates', to: 'locations#coordinates'
    get '/unsplash', to: 'locations#unsplash'
  end
end
