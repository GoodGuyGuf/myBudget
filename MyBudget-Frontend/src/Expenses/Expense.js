class Expense {

    static all = []

    constructor({id, name, cost, date, budget_id, user_id, budget_remaining_balance}){
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.date = date;
        this.budgetId = budget_id;
        this.userId = user_id;
        this.budgetRemainingBalance = budget_remaining_balance;
        Expense.all.push(this);
        
            this.table = document.getElementById(`BudgetTable_${this.budgetId}`);

        if (this.table){
            this.row = document.createElement("tr");
            this.row.id = `Expense${this.id}`;
            this.table.appendChild(this.row);

            this.nameRow = document.createElement("td");
            this.costRow = document.createElement("td");
            this.dateRow = document.createElement("td");

            this.nameRow.innerHTML = `<td>${this.name}</td>`;
            this.costRow.innerHTML = `<td>${this.cost}</td>`;
            this.dateRow.innerHTML = `<td>${this.date}</td>`;

            this.row.appendChild(this.nameRow);
            this.row.appendChild(this.costRow);
            this.row.appendChild(this.dateRow);

            this.budgetRemainingBalanceNode = document.getElementById(`Budget${this.budgetId}RemainingBalance`);
            setTimeout(() => {
                this.budgetRemainingBalanceNode.innerHTML = `Remaining Balance: $${this.budgetRemainingBalance}`;
            }, 200); 
        }
    }

}