require 'rails_helper'

RSpec.describe Catalog, type: :model do

  # relation with areas
  it { should have_many(:areas).dependent(:destroy) }

  #has name colum
  it { should validate_presence_of(:name) }

end