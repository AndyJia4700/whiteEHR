class CreatePhysicians < ActiveRecord::Migration[5.2]
  def change
    create_table :physicians do |t|
      t.string :physician_name
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.integer :npi
      t.text :address

      t.timestamps
    end

    add_index :physicians, :email, unique: true
    add_index :physicians, :session_token, unique: true
  end
end
