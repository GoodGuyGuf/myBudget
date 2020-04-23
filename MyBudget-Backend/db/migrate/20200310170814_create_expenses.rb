class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name
			t.integer :cost
			t.string :date
      t.belongs_to :budget
      t.belongs_to :user
    end
  end
end
