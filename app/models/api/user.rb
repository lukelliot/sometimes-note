class Api::User < ActiveRecord::Base
  validates :password, presence: true,  length: { in: 6..20, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, :username, presence: true, uniqueness: true

  after_initialize :ensure_logged_in

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.valid_password?(password)
    nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    
  end
end
