class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :budgets_count
  has_many :budgets
  has_many :expenses
end
