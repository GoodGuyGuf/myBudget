class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank, :user_id, :expenses_total, :remaining_balance
  has_many :expenses
  belongs_to :user
end
