class Budget {

    static all = [];
    
    constructor({id, title, bank, user_id}){
        this.id = parseInt(id);
        this.title = title;
        this.bank = bank;
        this.userId = user_id;
        Budget.all.push(this);

        this.container = document.createElement("div");
        this.container.id = `budget${id}`;
        document.body.appendChild(this.container);

        this.titleNode = document.createElement("h1");
        this.titleNode.id = `BudgetTitle${id}`;
        this.titleNode.innerHTML = `Budget for: ${title} | Balance: ${bank}`;
        this.container.appendChild(this.titleNode);

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
        new ExpenseForm(this.id, this.userId)
    }

    get expenses(){
        return Expense.all.filter(function(expense){
            return expense.budgetId === this.id;
        }, this)
    }// expense.render appends expenses

    get remainingBalance(){
        return this.expenses.reduce(function(total, element){return total - element.cost}, this.bank);
    }

}
