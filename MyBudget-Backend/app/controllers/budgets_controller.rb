class BudgetsController < ApplicationController

    def index
        budgets = Budget.all
        render json: BudgetSerializer.new(budgets)
    end

    def new
        budget = budget.new
    end

    def create
        budget = Budget.create(budget_params)
        redirect_to budget_path(budget)
    end

    def show
        budget = Budget.find_by_id(params[:id])
        render json: BudgetSerializer.new(budget)
    end

    private

    def budget_params
        params.require(:budget).permit(:title, :bank, :user_id)
    end

end