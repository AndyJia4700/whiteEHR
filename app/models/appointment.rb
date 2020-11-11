# == Schema Information
#
# Table name: appointments
#
#  id               :bigint           not null, primary key
#  appointment_date :date
#  physician_id     :integer
#  patient_id       :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Appointment < ApplicationRecord
  belongs_to :physician,
  foreign_key: :physician_id,
  class_name: "Physician"

  belongs_to :patient,
  foreign_key: :patient_id,
  class_name: "Patient"
end
