Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :catalogs do
    resources :areas do
      resources :items
    end
  end

  # get "/pages/:page" => "pages#show"

  # root "public/front.html"

  get '/', :to => redirect('/front.html')

end
