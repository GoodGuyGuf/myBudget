class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name
			t.float :cost
			t.string :date
			t.integer :budget_id
    end
  end
end
