class BudgetsController < ApplicationController

    def index
        budgets = Budget.all
        render json: BudgetSerializer.new(budgets)
    end

    def create
        budget = Budget.create(budget_params)
        redirect_to budget_path(budget)
    end

    private

    def budget_params
        params.require(:budget).permit(:title, :bank, :user_id)
    end

end