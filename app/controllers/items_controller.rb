class ItemsController < ApplicationController
  include Response
  
    before_action :set_catalog_area
    before_action :set_catalog_area_item, only: [:show, :update, :destroy]
  
    def index
      json_response(@area.items)
    end
  
    def show
      json_response(@item)
    end
  
    def create
      @area.items.create!(item_params)
      json_response(@area.items, :created)
    end
  
    def update
      @item.update(item_params)
      head :no_content
    end
  
    def destroy
      @item.destroy
      head :no_content
    end
  
    private
  
    def item_params
      params.permit(:name)
    end
  
    def set_catalog_area
      # @catalog = Catalog.areas.find(params[:catalog_id]).find(params[:area_id])
      @area = Area.find(params[:area_id])
    end
  
    def set_catalog_area_item
      @item = @area.items.find_by!(id: params[:id]) if @area
    end
  

end
