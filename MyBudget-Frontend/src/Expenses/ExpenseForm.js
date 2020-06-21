class ExpenseForm {
    constructor(budgetId, userId){
        this.budgetId = budgetId;
        this.userId = userId

        this.budget = document.getElementById(`budget${this.budgetId}`)

        this.formContainer = document.createElement("div");
        this.formContainer.innerHTML = `<form id='Budget_${this.budgetId}ExpenseForm' action="http://localhost:3000/expenses" method="POST">
        <h3>New Expense: </h3>
        <label>Name: </label>
        <input id="name${this.budgetId}" type="text" name="expense[name]" placeholder="Name">

        <label>Cost: </label>
        <input id="cost${this.budgetId}" type="number" name="expense[cost]" placeholder="Cost">

        <label>Date: </label>
        <input id="date${this.budgetId}" type="text" name="expense[date]" placeholder="Date">

        <input id="hidden${this.budgetId}" type="hidden" name="expense[budget_id]" value="${this.budgetId}">
        <input id="hiddenUser${this.userId}" type="hidden" name="expense[user_id]" value="${this.userId}">
      <button id='submit' value='Submit' type='submit'>Submit</button>
    </form>`

    this.budget.appendChild(this.formContainer)
    this.submitForm()
    }

    submitForm(){
        document.querySelector(`#Budget_${this.budgetId}ExpenseForm`).addEventListener("submit", event => {
            event.preventDefault()
            let expenseName = document.getElementById(`name${this.budgetId}`).value
            let expenseCost = document.getElementById(`cost${this.budgetId}`).value
            let expenseDate = document.getElementById(`date${this.budgetId}`).value
            let expenseBudgetId = document.querySelector(`#hidden${this.budgetId}`).value
            let expenseBudgetUserId = document.querySelector(`#hiddenUser${this.userId}`).value
            let expenseObject = {
                name: expenseName, 
                cost: expenseCost, 
                date: expenseDate, 
                budget_id: expenseBudgetId, 
                user_id: expenseBudgetUserId 
            }
            createExpense(expenseObject)
        })
    }
}