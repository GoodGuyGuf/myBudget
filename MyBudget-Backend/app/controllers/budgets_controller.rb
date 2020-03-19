class BudgetsController < ApplicationController

    def index
        budgets = Budget.all
        render json: BudgetSerializer.new(budgets)
    end

    def create
        budget = Budget.new(budget_params)
        if budget.valid?
            budget.save
            redirect_to budget_path(budget)
        else
            render json: {message: "Fields cannot be blank"}
        end
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