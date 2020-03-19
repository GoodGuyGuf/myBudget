class Budget < ActiveRecord::Base
    validates :title, :bank, presence: true
    has_many :expenses
    belongs_to :user
end