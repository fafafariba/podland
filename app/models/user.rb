class User < ApplicationRecord
  validates :email, :name, :session_token, :password_digest, presence: true
  validates :email, :session_token, :password_digest, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :subscriptions, dependent: :destroy

  has_many :podcasts,
  through: :subscriptions,
  source: :podcast

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(10)
    self.save
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(10)
  end
end
