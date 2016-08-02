class Api::User < ActiveRecord::Base
  validates :password, presence: true,  length: { in: 6..20, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, :username, presence: true, uniqueness: true

  # has_many :notes
  # has_many :notebooks

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

    while User.exists(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end

    token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token!
  end
end
