class Expense < ActiveRecord::Base
    validates :name, :cost, :date, presence: true
    belongs_to :budget
    belongs_to :user

    def budget_remaining_balance
        self.budget.remaining_balance
    end
end