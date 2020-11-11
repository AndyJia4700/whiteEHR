class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :patient_name, null: false
      t.date :dob, null: false
      t.integer :phone, null: false
      t.text :address
      t.string :gender
      t.string :insurance_id
      
      t.timestamps
    end
    
    
  end
end
