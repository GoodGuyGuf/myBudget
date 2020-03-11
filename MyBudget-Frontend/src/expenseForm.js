function createExpenseForm(id){
    let formDiv = document.createElement("div")
    formDiv.id = "expenseForm"
    formDiv.innerHTML = `<div id="form">

    <form action="http://localhost:3000/budgets" method="POST">
        <label>Name: </label>
        <input id="name${id}" type="text" name="expense[name]" placeholder="Name">

        <label>Cost: </label>
        <input id="cost${id}" type="number" name="expense[cost]" placeholder="Cost">

        <label>Date: </label>
        <input id="date${id}" type="text" name="expense[date]" placeholder="Date">

        <input id="hidden${id}" type="hidden" name="expense[budget_id]" value="${id}">
      <input id='submit' value='Submit' type='submit'>
    </form>
  </div>`
  document.body.appendChild(formDiv)
  
  formDiv.addEventListener("submit", function(e){
    e.preventDefault();
  let expenseName = document.querySelector(`#name${id}`).value
  let expenseCost = document.querySelector(`#cost${id}`).value
  let expenseDate = document.querySelector(`#date${id}`).value
  let expenseBudgetId = document.querySelector(`#hidden${id}`).value
  let expenseObject = {name: expenseName, cost: expenseCost, date: expenseDate, budget_id: expenseBudgetId}
  ExpenseAdapter.newExpense(expenseObject)
  })
}
