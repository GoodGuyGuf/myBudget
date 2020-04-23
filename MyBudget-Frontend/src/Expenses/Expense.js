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



// // Originally was in the file expenseForm:
// function createExpenseForm(id){
//     let formDiv = document.createElement("div")
//     let budgetDiv = document.getElementById(`BudgetDiv${id}`)
//     formDiv.id = "expenseForm"
//     formDiv.innerHTML = `<div id="form">

//   </div>`
//   budgetDiv.appendChild(formDiv)
  
//   formDiv.addEventListener("submit", function(e){
//     e.preventDefault();
//   let expenseName = document.querySelector(`#name${id}`).value
//   let expenseCost = document.querySelector(`#cost${id}`).value
//   let expenseDate = document.querySelector(`#date${id}`).value
//   let expenseBudgetId = document.querySelector(`#hidden${id}`).value
//   let expenseBudgetUserId = document.querySelector(`#hiddenUser${id}`).value
//   let expenseObject = {name: expenseName, cost: expenseCost, date: expenseDate, budget_id: expenseBudgetId, user_id: expenseBudgetUserId }
//   newExpense(expenseObject)
//   })
// }


// function expenseFetcher(){
// fetch("http://localhost:3000/expenses")
//     .then(function(response) { 
//     return response.json()
// })
// .then(function(json){
//     json.data.forEach(function(expense){
//       let newExpenseObj = {id: expense.id, ...expense.attributes, budgetId: expense.attributes.budget_id, user_id: expense.attributes.user_id } 
//       new Expense (newExpenseObj)
//       })
// })
// .catch(function(error) {
//     alert("Fetch has gone through. Something else has gone wrong.");
//     console.log(error.message);
//   });
// }