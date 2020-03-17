// Originall was in index.js file:
let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");


function allBudgets(){ //fetches the budgets and makes objects out of the response
    
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {id: budget.id, ...budget.attributes, user_id: budget.attributes.user_id};
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
appendExpensesDOM()
}

function appendExpensesDOM(){ 

    for (let i = 0; i < User.all[0].budgets.length; i++){
        createExpenseForm(User.all[0].budgets[i].id);

        let div = document.getElementById(`BudgetDiv${User.all[0].budgets[i].id}`)
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h5");
        h5.id=`remainingValue${User.all[0].budgets[i].id}`

        h4.textContent = "Remaining balance:";
        // h5.textContent = `$${User.all[0].budgets[i].expenses.reduce(function(total, element){return total - element.cost}, User.all[0].budgets[i].bank)}`
        h5.textContent = `$${User.all[0].budgets[i].remainingBalance}`;
        div.appendChild(h4);
        div.appendChild(h5);
    }
    ExpenseAppender()
}

function ExpenseAppender(){
    if (User.all[0].expenses.length !== 0){
        for (let i = 0; i < User.all[0].expenses.length; i++){
            let ul = document.getElementById(`expenses${User.all[0].expenses[i].budgetId}`)
            let li = document.createElement("li");

            li.textContent = `Expense: Name: ${User.all[0].expenses[i].name} - $${User.all[0].expenses[i].cost} - Due: ${User.all[0].expenses[i].date}`;
            ul.appendChild(li);
        }
    }
}
