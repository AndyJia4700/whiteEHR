# == Schema Information
#
# Table name: insurances
#
#  id               :bigint           not null, primary key
#  insurance_name   :string
#  insurance_number :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Insurance < ApplicationRecord
  validates :insurance_name, uniqueness: true
end
