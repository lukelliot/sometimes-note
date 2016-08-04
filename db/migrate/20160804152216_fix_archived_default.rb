class FixArchivedDefault < ActiveRecord::Migration
  def change
    remove_column :notes, :archived
    add_column :notes, :archived, :boolean, null: false
  end
end
