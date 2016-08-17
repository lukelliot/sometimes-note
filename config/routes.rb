Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :notes, only: [:index, :create, :destroy, :update]
    resources :notebooks, only: [:index, :create, :destroy, :update]
    resource :session
  end
end
