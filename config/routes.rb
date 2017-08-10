Rails.application.routes.draw do
  namespace :api do
    resources :bars
  end
end
