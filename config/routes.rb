Rails.application.routes.draw do
  
  root :to => 'users#new'
  
  resources :users, only: [:new, :create, :show, :destroy]
  resources :weights, only: [:new, :create]
  resources :welcome

  get 'sessions/new' => 'sessions#new'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'

end
