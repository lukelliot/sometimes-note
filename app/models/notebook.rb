# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ActiveRecord::Base
  validates :title, :author_id, presence: true

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id,
    inverse_of: :notebooks
  )

  has_many(
    :notes,
    class_name: 'Note',
    primary_key: :id,
    foreign_key: :notebook_id,
    inverse_of: :notebook
  )
end
