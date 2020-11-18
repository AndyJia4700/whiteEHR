Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :physicians
    resources :patients
    resources :appointments
    resources :insurances
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
