class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username
  has_many :budgets
  has_many :expenses
end
