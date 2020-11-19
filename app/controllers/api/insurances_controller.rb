class Api::InsurancesController < ApplicationController
    def index
        @insurances = Insurance.all
        render :index
    end

    def show
        @insurance = Insurance.find(params[:id])
        render :show
    end

    def create
        @insurance = Insurance.new(insurance_params)
        if @insurance.save
            render "api/insurances/show"
        else
            render :show
        end
    end

    def insurance_params
        params.require(:insurance).permit(:insurance_name)
    end
end
