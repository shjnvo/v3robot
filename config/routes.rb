Rails.application.routes.draw do
  resources :pages
  resources :reports do
    get :download, on: :member
    get :carton, on: :member
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
