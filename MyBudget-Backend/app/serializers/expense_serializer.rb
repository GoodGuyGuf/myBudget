class ExpenseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cost, :date, :budget_id, :user_id, :budget_remaining_balance
  belongs_to :budget
  belongs_to :user
end
