class Expense {

    static all = []

    constructor({id, name, cost, date, budget_id, user_id}){
        this.id = id
        this.name = name
        this.cost = cost
        this.date = date
        this.budgetId = budget_id
        this.userId = user_id
        Expense.all.push(this)

        this.table = document.getElementById(`BudgetTable_${this.budgetId}`)
        
        this.row = document.createElement("tr");
        this.row.id = `Expense${this.id}`;
        this.table.appendChild(this.row)

        this.idRow = document.createElement("td")
        this.nameRow = document.createElement("td")
        this.costRow = document.createElement("td")
        this.dateRow = document.createElement("td")

        this.idRow.innerHTML = `<td>${this.id}</td>`
        this.nameRow.innerHTML = `<td>${this.name}</td>`
        this.costRow.innerHTML = `<td>${this.cost}</td>`
        this.dateRow.innerHTML = `<td>${this.date}</td>`

        this.row.appendChild(this.idRow)
        this.row.appendChild(this.nameRow)
        this.row.appendChild(this.costRow)
        this.row.appendChild(this.dateRow)
    }
    
    get budgets(){
      return Budget.all.filter(function(budget){
          return budget.id === this.budgetId
      }, this)
    }

}