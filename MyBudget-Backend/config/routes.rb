Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :budgets, only: [:index, :create, :show]
  resources :expenses, only: [:index, :create]
  resources :users, only: [:index, :create]

  post 'login', to: 'users#session'
end
