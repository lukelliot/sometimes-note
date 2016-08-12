# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  content     :text             not null
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  archived    :boolean          default(FALSE)
#

class Note < ActiveRecord::Base
  # NOTE Add validations for presence for authorid and notebookid
  # => they were taken out for testing.

  validates :title, :content, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id,
    inverse_of: :notes
  )

  belongs_to(
    :notebook,
    class_name: 'Notebook',
    primary_key: :id,
    foreign_key: :notebook_id,
    inverse_of: :notes
  )
end
