# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :password, length: { in: 6..30, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, :email, presence: true, uniqueness: true

  has_many(
    :notes,
    class_name: 'Note',
    foreign_key: :author_id,
    primary_key: :id,
    inverse_of: :author
  )

  has_many(
    :notebooks,
    class_name: 'Notebook',
    primary_key: :id,
    foreign_key: :author_id,
    inverse_of: :author
  )

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.valid_password?(password)
    nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token!
    self.save!
    self.session_token
  end

  def generate_session_token!
    token = SecureRandom::urlsafe_base64(16)

    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end

    token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token!
  end
end
