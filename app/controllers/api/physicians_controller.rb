class Api::PhysiciansController < ApplicationController
    before_action :ensure_logged_in, only:[:update]
    skip_before_action :verify_authenticity_token

    def index
        @physicians = Physician.all
    end

    def show
        @physician = Physician.find(params[:id])
    end

    def edit
        @physician = Physician.find(params[:id])
    end

    def create
        @physician = Physician.new(physician_params)
        if @physician.save
            login(@physician)
            render "api/physicians/show"
        else
            render json: @physician.errors.full_messages, status: 422
        end
    end

    def update
        @physician = Physician.find(params[:physician][:id])
        if @physician && @physician.id == current_physician.id
            if @physician.update(physician_params)
                render :show
            else
                render json: @physician.errors.full_messages, status: 422
            end
        end
    end

    private

    def physician_params
        params.require(:physician).permit(
            :email, 
            :password, 
            :physician_name,
            :npi,
            :address,
        )
    end
end
