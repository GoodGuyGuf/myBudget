let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

//allBudgets(); // we call the fetch

function allBudgets(){ //fetches the budgets and makes objects out of the response
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {...budget.attributes, id: budget.id};
            new Budget(obj);
        })
        appendElements()
        numberOfBudgets.innerText = `Number of Budgets: ${Budget.all.length}`;
    })
}

function appendElements(){ //grabs each Budget.all and appends to DOM
    for (array of Budget.all){
    
    let div = document.createElement("div");
    div.id=`BudgetDiv${array.id}`;
    div.className="BudgetDiv"
    document.body.appendChild(div);
    let h1 = document.createElement("h1");

    h1.id = `Budget${array.id}`
    h1.textContent = `Budget for: ${array.title} - Balance: $${array.bank}`;
    div.appendChild(h1);

    appendExpenses(array)
}
}

function appendExpenses(array){ // array is an instance of a budget
    let div = document.getElementById(`BudgetDiv${array.id}`)
    let ul = document.createElement("ul");
    ul.id =`expenses${array.id}`
    div.appendChild(ul)
    for (let i = 0; i < array.expenses.length; i++){
        let li = document.createElement("li");
        
        li.textContent = `Expense: Name: ${array.expenses[i].name} - $${array.expenses[i].cost} - Due: ${array.expenses[i].date}`;

        ul.appendChild(li);
    }
    createExpenseForm(array.id);
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h4");
    h5.id=`remainingValue${array.id}`

    h4.textContent = "Remaining balance:";
    h5.textContent = `$${array.expenses.reduce(function(total, element){return total - element.cost}, array.bank)}`
    div.appendChild(h4);
    div.appendChild(h5);

}

