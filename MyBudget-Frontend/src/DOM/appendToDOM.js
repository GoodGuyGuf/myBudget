// Originall was in index.js file:
let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

//allBudgets(); // we call the fetch

function allBudgets(){ //fetches the budgets and makes objects out of the response
    
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {id: budget.id, ...budget.attributes, user_id: budget.relationships.user.data.id};
            new Budget(obj);
        })
        appendElements()
        numberOfBudgets.innerText = `Number of Budgets: ${User.all[0].budgets.length}`;
    })
    
}

function appendElements(){ //grabs each Budget.all and appends to DOM
    for (let i = 0; i < User.all[0].budgets.length; i++){
    
    let div = document.createElement("div");
    div.id=`BudgetDiv${User.all[0].budgets[i].id}`;
    div.className="BudgetDiv"
    document.body.appendChild(div);
    let h1 = document.createElement("h1");

    h1.id = `Budget${User.all[0].budgets[i].id}`
    h1.textContent = `Budget for: ${User.all[0].budgets[i].title} - Balance: $${User.all[0].budgets[i].bank}`;
    div.appendChild(h1);

    let ul = document.createElement("ul");
    ul.id =`expenses${User.all[0].budgets[i].id}`;
    div.appendChild(ul)
}

}

function appendExpensesDOM(){ 

    for (let i = 0; i < Expense.all.length; i++){
        let ul = document.getElementById(`expenses${Expense.all[i].budgetId}`) // For each expense, grab the ul with the id of the budgetId
        let li = document.createElement("li");

        li.textContent = `Expense: Name: ${Expense.all[i].name} - $${Expense.all[i].cost} - Due: ${Expense.all[i].date}`;
        ul.appendChild(li);
    }

    for (let i = 0; i < Budget.all.length; i++){
        createExpenseForm(Budget.all[i].id);

        let div = document.getElementById(`BudgetDiv${Budget.all[i].id}`)
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h4");
        h5.id=`remainingValue${Budget.all[i].id}`

        h4.textContent = "Remaining balance:";
        h5.textContent = `$${Budget.all[i].expenses.reduce(function(total, element){return total - element.cost}, Budget.all[i].bank)}`
        div.appendChild(h4);
        div.appendChild(h5);
    }
}
