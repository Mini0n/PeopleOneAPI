class Item < ApplicationRecord
  belongs_to :area


  validates_presence_of :name

end
