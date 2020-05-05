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

        this.container = document.createElement("div");
        this.container.id = `budget${id}`;
        document.body.appendChild(this.container);

        this.titleNode = document.createElement("h1");
        this.titleNode.id = `BudgetTitle${id}`;
        this.titleNode.innerHTML = `Budget for: ${title} | Balance: $${bank}`;
        this.container.appendChild(this.titleNode);

        this.remainingBalanceNode = document.createElement("p");
        this.remainingBalanceNode.id = `Budget${this.id}RemainingBalance`;
        this.remainingBalanceNode.innerHTML = `Remaining Balance: $${this.remainingBalance}`;

        this.table = document.createElement("table");
        this.table.id = `BudgetTable_${id}`;
        this.container.appendChild(this.table);

        this.initialRow = document.createElement("tr")
        this.initialRow.innerHTML = 
        "<tr>" +
            "<th>Id</th>" +
            "<th>Name</th>" +
            "<th>Cost</th>" +
            "<th>Date</th>" +
        "</tr>"
        this.table.appendChild(this.initialRow)
        this.container.appendChild(this.remainingBalanceNode)
        new ExpenseForm(this.id, this.userId)

        this.deleteButtonDiv = document.createElement("div");
        this.deleteButtonDiv.id = "deleteButtonDiv";
        this.container.appendChild(this.deleteButtonDiv)

        this.deleteButton = document.createElement("button");
        this.deleteButton.id = `Budgeter${this.id}DeleteButton`;
        this.deleteButton.innerHTML = "Delete Budget";
        this.deleteButtonDiv.appendChild(this.deleteButton)

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
