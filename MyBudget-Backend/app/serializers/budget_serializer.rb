class BudgetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :bank
end
