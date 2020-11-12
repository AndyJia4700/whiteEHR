class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_physician, :logged_in?
    def current_physician
        @current_physician ||= Physician.find_by(session_token: session[:session_token])
    end

    def login(physician)
        physician.reset_session_token!
        session[:session_token] = physician.reset_session_token!
        @current_physician = physician
    end

    def logout
        current_physician.reset_session_token!
        session[:session_token] = nil
        @current_physician = nil
    end

    def logged_in?
        !!current_physician
    end

    def ensure_logged_in
        unless current_physician
            render json:{
                base: ['invalid']
            }, status: 401
        end
    end
end
