class Expense {

    static all = []

    constructor({id, name, cost, date, budgetId, user_id}){
        this.id = parseInt(id)
        this.name = name
        this.cost = cost
        this.date = date
        this.budgetId = parseInt(budgetId)
        this.userId = user_id

        Expense.all.push(this)
    }

    get budgets(){
      return Budget.all.filter(function(budget){
          return budget.id === this.budgetId
      }, this)
  }

}

// Originally was in the file expenseForm:
function createExpenseForm(id){
    let formDiv = document.createElement("div")
    let budgetDiv = document.getElementById(`BudgetDiv${id}`)
    formDiv.id = "expenseForm"
    formDiv.innerHTML = `<div id="form">

    <form action="http://localhost:3000/expenses" method="POST">
        <h3>New Expense: </h3>
        <label>Name: </label>
        <input id="name${id}" type="text" name="expense[name]" placeholder="Name">

        <label>Cost: </label>
        <input id="cost${id}" type="number" name="expense[cost]" placeholder="Cost">

        <label>Date: </label>
        <input id="date${id}" type="text" name="expense[date]" placeholder="Date">

        <input id="hidden${id}" type="hidden" name="expense[budget_id]" value="${id}">
        <input id="hiddenUser${id}" type="hidden" name="expense[user_id]" value="${User.all[0].id}">
      <input id='submit' value='Submit' type='submit'>
    </form>
  </div>`
  budgetDiv.appendChild(formDiv)
  
  formDiv.addEventListener("submit", function(e){
    e.preventDefault();
  let expenseName = document.querySelector(`#name${id}`).value
  let expenseCost = document.querySelector(`#cost${id}`).value
  let expenseDate = document.querySelector(`#date${id}`).value
  let expenseBudgetId = document.querySelector(`#hidden${id}`).value
  let expenseBudgetUserId = document.querySelector(`#hiddenUser${id}`).value
  let expenseObject = {name: expenseName, cost: expenseCost, date: expenseDate, budget_id: expenseBudgetId, user_id: expenseBudgetUserId }
  newExpense(expenseObject)
  })
}


function expenseFetcher(){
fetch("http://localhost:3000/expenses")
    .then(function(response) { 
    return response.json()
})
.then(function(json){
    json.data.forEach(function(expense){
      console.log(expense)
      let newExpenseObj = {id: expense.id, ...expense.attributes, budgetId: expense.attributes.budget_id, user_id: expense.attributes.user_id } 
      new Expense (newExpenseObj)
      })
})
.catch(function(error) {
    alert("Fetch has gone through. Something else has gone wrong.");
    console.log(error.message);
  });
}