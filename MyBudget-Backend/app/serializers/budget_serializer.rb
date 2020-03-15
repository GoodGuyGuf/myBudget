class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank
  has_many :expenses
  belongs_to :user
end
