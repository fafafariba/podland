Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :podcasts, only: [:create, :index, :show]
  end
  root "static_pages#root"
end
