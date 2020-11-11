class CreateInsurances < ActiveRecord::Migration[5.2]
  def change
    create_table :insurances do |t|
      t.string :insurance_name
      t.string :insurance_number
      t.timestamps
    end
    add_index :insurances, :insurance_name
  end
end
