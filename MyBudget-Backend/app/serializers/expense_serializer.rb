class ExpenseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cost, :date, :budget_id
  belongs_to :budget
end
