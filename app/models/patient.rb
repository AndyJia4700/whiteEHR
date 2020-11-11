# == Schema Information
#
# Table name: patients
#
#  id           :bigint           not null, primary key
#  patient_name :string           not null
#  dob          :date             not null
#  phone        :integer          not null
#  address      :text
#  gender       :string
#  insurance_id :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments
  has_one_attached :patient_photo
end
