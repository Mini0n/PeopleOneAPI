require 'rails_helper'

RSPec.describe Item, type: :model do

  #association with area
  it { should belong_to(:area) }

  #has name column
  it { should validate_presence_of(:name) }

end