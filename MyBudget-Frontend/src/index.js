let budgetLink = document.getElementById("navBudgets");

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
    h1.textContent = `${fetched.data.attributes.title}: ${fetched.data.attributes.bank}`;
    document.body.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.textContent = `Expense 1: Name: ${fetched.data.attributes.expenses[0].name} - Cost: ${fetched.data.attributes.expenses[0].cost} - Due Date: ${fetched.data.attributes.expenses[0].date}`;
    document.body.appendChild(h3);
}
