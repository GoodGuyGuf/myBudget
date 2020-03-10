class BudgetsController < ApplicationController

    def new

    end

    def create

    end

    def show
        budget = Budget.find_by_id(params[:id])
        render json: BudgetSerializer.new(budget).to_serialized_json
    end

end