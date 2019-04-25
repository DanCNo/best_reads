Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:show, :index]
    resources :bookshelves, only: [:update, :create, :destroy, :index, :show]
    resources :shelvings, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
  end

  root to: "static_pages#root"
end
