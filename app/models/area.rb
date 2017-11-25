class Area < ApplicationRecord
  belongs_to :catalog

  #has many
  has_many :items, dependent: :destroy

  #validate
  validates_presence_of :name

end
