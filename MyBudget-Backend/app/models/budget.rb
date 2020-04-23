class Budget < ActiveRecord::Base
    validates :title, :bank, presence: true
    has_many :expenses
    belongs_to :user

    def expenses_total
        sum = self.expenses.inject(0) {|sum, expense| sum + expense.cost}
        return sum
    end

    def remaining_balance
        if expenses_total
            self.bank - expenses_total
        end
    end
end