class RemoveUsernameAddEmail < ActiveRecord::Migration
  def change
    remove_column :api_users, :username
    add_column :api_users, :email, :string
    add_index :api_users, :email, unique: true
    remove_index :api_users, :session_token
    add_index :api_users, :session_token, unique: true
  end
end
