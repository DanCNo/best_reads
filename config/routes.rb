Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:show, :index]
    resources :bookshelves, only: [:update, :create, :destroy, :index, :show]
    resources :shelvings, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
