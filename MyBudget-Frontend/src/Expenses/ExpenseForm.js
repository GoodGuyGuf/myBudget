class ExpenseForm {
    constructor(budgetId, userId){

        this.budget = document.getElementById(`budget${budgetId}`)

        this.form = document.createElement("form");
        this.form.id = `Budget_${budgetId}ExpenseForm`;
        this.form.innerHTML = `<form action="http://localhost:3000/expenses" method="POST">
        <h3>New Expense: </h3>
        <label>Name: </label>
        <input id="name" type="text" name="expense[name]" placeholder="Name">

        <label>Cost: </label>
        <input id="cost" type="number" name="expense[cost]" placeholder="Cost">

        <label>Date: </label>
        <input id="date" type="text" name="expense[date]" placeholder="Date">

        <input id="hidden${budgetId}" type="hidden" name="expense[budget_id]" value="${budgetId}">
        <input id="hiddenUser${userId}" type="hidden" name="expense[user_id]" value="${userId}">
      <input id='submit' value='Submit' type='submit'>
    </form>`

    this.budget.appendChild(this.form)
    }
}