# == Schema Information
#
# Table name: physicians
#
#  id              :bigint           not null, primary key
#  physician_name  :string
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  npi             :integer
#  address         :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Physician < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length:{ minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :appointments
    has_many :patients, through: :appointments

    has_one_attached :phcoto

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: Physician.generate_session_token)
        self.session_token
    end

    def self.find_by_credentials(email, password)
        physician = Physician.find_by(email: email)
        return nil unless physician && physician.is_password?(password)
        physician
    end

    private

    def ensure_session_token
        self.session_token ||= Physician.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
