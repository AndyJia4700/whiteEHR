class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.date :appointment_date
      t.integer :physician_id
      t.integer :patient_id
      t.timestamps
    end
    add_index :appointments, :physician_id
    add_index :appointments, :patient_id
  end
end
