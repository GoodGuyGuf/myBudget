class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank, :user_id
  belongs_to :user
end
