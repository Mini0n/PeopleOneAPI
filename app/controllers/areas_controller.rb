class AreasController < ApplicationController
  include Response

  before_action :set_catalog
  before_action :set_catalog_area, only: [:show, :update, :destroy]

  def index
    json_response(@catalog.areas)
  end

  def show
    json_response(@area)
  end

  def create
    @catalog.areas.create!(area_params)
    json_response(@catalog, :created)
  end

  def update
    @area.update(area_params)
    head :no_content
  end

  def destroy
    @area.destroy
    head :no_content
  end

  private

  def area_params
    params.permit(:name)
  end

  def set_catalog
    @catalog = Catalog.find(params[:catalog_id])
  end

  def set_catalog_area
    @area = @catalog.areas.find_by!(id: params[:id]) if @catalog
  end

end
