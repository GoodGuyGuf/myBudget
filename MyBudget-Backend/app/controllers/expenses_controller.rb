class ExpensesController < ApplicationController

    def create
        expense = Budget.expenses.build(params.require(:expense).permit(:name, :cost, :date, :budget_id))
    end
    
end