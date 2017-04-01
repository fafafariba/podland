Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :podcasts, only: [:create, :index, :show]
    resources :subscriptions, only: [:index, :create, :destroy]
    resources :episodes, only: [:index, :show]
    resources :playlists, only: [:index, :create, :destroy]
    resources :tracks, only: [:index, :create, :destroy]
  end
  root "static_pages#root"
end
