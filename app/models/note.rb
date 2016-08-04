class Note < ActiveRecord::Base
  validates :title, :content, :author_id, :notebook_id, presence: true
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
