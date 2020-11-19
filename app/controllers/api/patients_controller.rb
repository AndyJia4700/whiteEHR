class Api::PatientsController < ApplicationController
    before_action :ensure_logged_in, only:[:update]
    skip_before_action :verify_authenticity_token

    def index
        @patients = Patient.all
    end

    def show
        @patient = Patient.find(params[:id])
    end

    def edit
        @patient = Patient.find(params[:id])
    end

    def create
        @patient = Patient.new(patient_params)
        if @patient.save
            login(@patient)
            render "api/patients/show"
        else
            render json: @patient.errors.full_messages, status: 422
        end
    end

    def update
        @patient = Patient.find(params[:patient][:id])
        if @patient && @patient.own_physician_id == current_physician.id
            if @patient.update(patient_params)
                render :show
            else
                render json: @patient.errors.full_messages, status: 422
            end
        end
    end

    private

    def patient_params
        params.require(:patient).permit(
            :patient_name, 
            :dob, 
            :phone, 
            :address, 
            :gender, 
            :insurance_id, 
            :insurance_number
        )
    end
end
