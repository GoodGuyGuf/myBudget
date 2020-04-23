class Expense < ActiveRecord::Base
    validates :name, :cost, :date, presence: true
    belongs_to :budget
    belongs_to :user
end