Rails.application.routes.draw do
  resources :users
  resources :legs
  resources :right_arms
  resources :left_arms
  resources :bodies
  resources :heads
  
  resources :monster_parts
  
  namespace :api do
    resources :monsters
  end
  
end
