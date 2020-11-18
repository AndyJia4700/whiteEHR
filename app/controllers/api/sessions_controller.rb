class Api::SessionsController < ApplicationController
    def create
        @physician = Physician.find_by_credentials(
            params[:physician][:email],
            params[:physician][:password]
        )
        if @physician
            login(@physician)
            render "api/physicians/show"
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
        logout
        render json: {message: 'please sign in'}
    end
end