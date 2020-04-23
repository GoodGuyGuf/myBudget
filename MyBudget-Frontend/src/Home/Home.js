class Home {
    constructor(user, num){
        this.numberOfBudgets = document.createElement("p");
        this.numberOfBudgets.innerHTML = `Number of Budgets: ${num}`;
        document.body.appendChild(this.numberOfBudgets);

        this.username = document.createElement("p");
        this.username.innerHTML = `Username: ${user}`
        document.body.appendChild(this.username)

        this.budgetForm = new BudgetForm
        fetchExpenses()
        fetchBudgets()
    }
}