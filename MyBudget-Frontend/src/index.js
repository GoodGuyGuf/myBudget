let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

budgetLink.addEventListener("click", function(e){
    oneBudget();
}, {once : true});

function oneBudget(){
    fetch("http://localhost:3000/budgets/1")
    .then(function(response){
        return response.json()
    }).then(function(json){
        returnToMe(json)
    })
}

function returnToMe(fetched){
    let h1 = document.createElement("h1");
    h1.textContent = `Budget for: ${fetched.data.attributes.title} - Balance: $${fetched.data.attributes.bank}`;
    document.body.appendChild(h1);

    fetched.data.attributes.expenses.forEach(function(expense){
        let h3 = document.createElement("h3");
        h3.textContent = `Expense ${expense.id}: Name: ${expense.name} - Cost: ${expense.cost} - Due Date: ${expense.date}`;
        document.body.appendChild(h3);
    })

    numberOfBudgets.innerText = `Number of Budgets: ${fetched.data.attributes.expenses.length}`
}
