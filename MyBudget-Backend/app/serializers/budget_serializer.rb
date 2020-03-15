class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank, :expenses
  has_many :expenses
  belongs_to :user
end
