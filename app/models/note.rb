class Note < ActiveRecord::Base
  validates :title, :content, :author_id, :notebook_id, presence: true
end
