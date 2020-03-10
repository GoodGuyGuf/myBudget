class BudgetsController < ApplicationController

    def index
        budget = Budget.all
        render json: BudgetSerializer.new(budget)
    end

    def new
        budget = budget.new
    end

    def create
        budget = Budget.create(budget_params)
    end

    def show
        budget = Budget.find_by_id(params[:id])
        render json: BudgetSerializer.new(budget)
    end

    private

    def budget_params
        params.require(:budget).permit(:title, :bank)
    end

end