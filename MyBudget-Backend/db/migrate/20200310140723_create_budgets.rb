class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.string :title
      t.integer :bank
      t.integer :user_id
    end
  end
end
