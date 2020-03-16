class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank, :user_id
  has_many :expenses
  belongs_to :user
end
