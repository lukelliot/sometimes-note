class FixArchivedNullConstraintAddDefault < ActiveRecord::Migration
  def change
    remove_column :notes, :archived
    add_column :notes, :archived, :boolean, default: false
  end
end
