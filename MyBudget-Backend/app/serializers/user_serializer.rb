class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :budgets
end
