class Catalog < ApplicationRecord

  #association
  has_many :areas, dependent: :destroy

  #validate
  validates_presence_of :name

end
