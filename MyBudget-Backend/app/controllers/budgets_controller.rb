class BudgetsController < ApplicationController

    def index
        budgets = Budget.all
        render json: BudgetSerializer.new(budgets)
    end

    def create
        budget = Budget.new(budget_params)
        if budget.valid?
            budget.save
            render json: BudgetSerializer.new(budget)
        else
            render json: {message: "Fields cannot be blank"}
        end
    end

    private

    def budget_params
        params.require(:budget).permit(:title, :bank, :user_id)
    end

end