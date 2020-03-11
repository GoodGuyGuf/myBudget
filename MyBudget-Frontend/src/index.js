let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

allBudgets(); // we call the fetch

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
    })
}

function appendElements(){ //grabs each Budget.all and appends to DOM
    for (array of Budget.all){

    let h1 = document.createElement("h1");

    h1.id = `Budget${array.id}`
    h1.textContent = `Budget for: ${array.title} - Balance: $${array.bank}`;
    document.body.appendChild(h1);

    appendExpenses(array) // array is an instance of a budget
}
}

function appendExpenses(array){ // array is an instance of a budget
    let ul = document.createElement("ul");
    ul.id =`expenses${array.id}`
    document.body.appendChild(ul)
    for (let i = 0; i < array.expenses.length; i++){
        let li = document.createElement("li");
        
        li.textContent = `Expense: Name: ${array.expenses[i].name} - $${array.expenses[i].cost} - Due: ${array.expenses[i].date}`;

        ul.appendChild(li);
    }
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h4");
    h5.id=`remainingValue${array.id}`

    h4.textContent = "Remaining balance:";
    h5.textContent = `$${array.expenses.reduce(function(total, element){return total - element.cost}, array.bank)}`
    createExpenseForm(array.id);
    document.body.appendChild(h4);
    document.body.appendChild(h5);

}

// for each expense we use a for loop.
