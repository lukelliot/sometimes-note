class RemoveEmailAddNullConstrain < ActiveRecord::Migration
  def change
    remove_column :api_users, :email
    add_column :api_users, :email, :string, null: false
    add_index :api_users, :email, unique: true
  end
end
