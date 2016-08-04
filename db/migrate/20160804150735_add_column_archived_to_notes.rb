class AddColumnArchivedToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :archived, :boolean, null: false, default: false
  end
end
