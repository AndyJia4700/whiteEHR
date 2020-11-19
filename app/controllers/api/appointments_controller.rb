class Api::AppointmentsController < ApplicationController
    def index
        @appointments = Appointment.all
        render :index
    end

    def show
        @appointment = Appointment.find(params[:id])
        render :show
    end

    def create
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            render "api/appointments/show"
        else
            render :show
        end
    end

    def appointment_params
        params.require(:appointment).permit(:appointment_name)
    end
end
