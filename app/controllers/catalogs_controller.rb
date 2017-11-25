class CatalogsController < ApplicationController
  include Response

  before_action :set_catalog, only: [:show, :update, :destroy]

  #GET all
  def index
    @catalogs = Catalog.all
    json_response(@catalogs)
    # render json: @catalogs
  end

  #POST create
  def create
    @catalog = Catalog.create!(catalog_params)
    json_response(@catalog, :created)
    # render json: @catalog
  end

  #GET 1 catalog/:id
  def show
    json_response(@catalog)
    # render json: @catalog
  end

  #PUT update :id
  def update
    @catalog.update(catalog_params)
    head :no_content
  end

  #DELETE id
  def destroy
    @catalog.destroy
    head :no_content
  end


  private

  def catalog_params
    params.permit(:name)
  end

  def set_catalog
    @catalog = Catalog.find(params[:id])
  end

end
