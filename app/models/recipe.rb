class Recipe < ApplicationRecord

  belongs_to :agerange

  def self.search(search)
      where("name ILIKE ? OR ingredient ILIKE ?", "%#{search}%", "%#{search}%")
  end

end