// Originall was in index.js file:
let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

//allBudgets(); // we call the fetch

function allBudgets(){ //fetches the budgets and makes objects out of the response
    
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        json.data.forEach(function(budget){
            let obj = {id: budget.id, ...budget.attributes};
            new Budget(obj);
        })
        // appendElements()
        // numberOfBudgets.innerText = `Number of Budgets: ${Budget.all.length}`;
    })
    
}

function appendElements(){ //grabs each Budget.all and appends to DOM
    for (array of User.all[0].budgets.data){
    
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

function appendExpenses(budget){ // array is an instance of a budget
    let div = document.getElementById(`BudgetDiv${budget.data.id}`)
    let ul = document.createElement("ul");
    ul.id =`expenses${budget.id}`
    div.appendChild(ul)
    for (let i = 0; i < budget.data.length; i++){
        let li = document.createElement("li");
        
        li.textContent = `Expense: Name: ${budget.data[i].name} - $${budget.data[i].cost} - Due: ${budget.data[i].date}`;

        ul.appendChild(li);
    }
    createExpenseForm(budget.data.id);
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h4");
    h5.id=`remainingValue${budget.data.id}`

    h4.textContent = "Remaining balance:";
    h5.textContent = `$${budget.data.reduce(function(total, element){return total - element.cost}, budget.bank)}`
    div.appendChild(h4);
    div.appendChild(h5);
}
