class EditPatient < ActiveRecord::Migration[5.2]
  def change
    add_column :patients, :insurance_number, :string
    add_column :patients, :own_physician_id, :string
    
  end
end
