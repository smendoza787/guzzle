Rails.application.routes.draw do
  namespace :api do
    resources :bars
    resources :locations

    post '/google_places', to: 'locations#google_places'
    get '/unsplash', to: 'locations#unsplash'
  end
end
