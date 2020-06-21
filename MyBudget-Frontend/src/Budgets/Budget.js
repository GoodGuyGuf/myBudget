class Budget {

    static all = [];
    
    constructor({id, title, bank, user_id, expenses_total, remaining_balance, user_budgets_count}){
        this.id = parseInt(id);
        this.title = title;
        this.bank = bank;
        this.userId = user_id;
        this.expensesTotal = expenses_total
        this.remainingBalance = remaining_balance
        this.userBudgetsCount = user_budgets_count
        Budget.all.push(this);

        this.container = document.createElement("section");
        this.container.id = `budget${id}`;
        this.container.innerHTML = `
            <div>
                <h1 id='BudgetTitle${id}'>Budget for: ${title} | Balance: $${bank}</h1>
                <p id='Budget${this.id}RemainingBalance'>Remaining Balance: $${this.remainingBalance}</p>
            </div>
            <div>
                <table id='BudgetTable_${id}'>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Date</th>
                    </tr>
                </table>
            </div>
        `
        document.body.appendChild(this.container);

        new ExpenseForm(this.id, this.userId)

        this.deleteButtonContainer = document.createElement("div");
        this.container.appendChild(this.deleteButtonContainer);

        this.deleteButton = document.createElement("button");
        this.deleteButton.id = `Budgeter${this.id}DeleteButton`;
        this.deleteButton.innerHTML = "Delete Budget";
        this.deleteButtonContainer.appendChild(this.deleteButton)

        this.numberofBudgets = document.getElementById("budgetCount");
        this.numberofBudgets.innerHTML = `Number of Budgets: ${this.userBudgetsCount}`;

        this.handleDelete()
    }

    handleDelete(){
        this.deleteButton.addEventListener("click", () => {
            deleteBudget(this.id)
        })
    }

}
