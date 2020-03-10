# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

budget_one = Budget.create(title: "March, 2020", bank: 3000)
expense_one = Expense.create(name: "School loan", cost: "250", date: "March 30th", budget_id: 1)
expense_two = Expense.create(name: "Car Payment", cost: "300", date: "March 28th", budget_id: 1)