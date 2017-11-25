require 'rails_helper'

RSPec.describe Area, type: :model do

  #association with catalog
  it { should belong_to(:catalog) }

  #has name column
  it { should validate_presence_of(:name) }

end