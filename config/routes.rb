Rails.application.routes.draw do
  resources :pages
  resources :reports do
    get :download, on: :member
    get :carton, on: :member
    get :picklist, on: :member
    post :upload_list_items, on: :collection
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
