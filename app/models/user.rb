class User < ApplicationRecord

	validates :username, :email, :password_digest, :session_token, presence: true
	validates :username, :email, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: true

	has_many :bookshelves,
	class_name: :Bookshelf,
	foreign_key: :user_id,
	dependent: :destroy

	attr_reader :password

	after_initialize :ensure_session_token

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		user && user.is_password?(password) ? user : nil
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save
		self.session_token
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end 

	# private

	def ensure_session_token
		self.session_token ||= self.reset_session_token!
	end

	def self.generate_session_token

		token = SecureRandom.urlsafe_base64

		while User.find_by(session_token: token)
			token = SecureRandom.urlsafe_base64
		end

		token
	end

end
