let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

budgetLink.addEventListener("click", function(e){
    returnToMe()
}, {once : true});

function allBudgets(){
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {...budget.attributes, id: budget.id};
            new Budget(obj);
        })
    })
}

allBudgets();

function returnToMe(){
    for (array of Budget.all){
    let h1 = document.createElement("h1");
    h1.id = `Budget${array.id}`
    h1.textContent = `Budget for: ${array.title} - Balance: $${array.bank}`;
    document.body.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.textContent = `Expense: Name: ${array.expenses[0].name} - $${array.expenses[0].cost} - Due: ${array.expenses[0].date}`;
    document.body.appendChild(h3);
    createForm();
    }
}

function createForm(){
    let form = document.createElement("form")
    document.body.appendChild(form)

    let createLabel = document.createElement("label")
    createLabel.innerText = "New Expense: "

    let inputName = document.createElement('input');
    let nameLabel = document.createElement("label")
    nameLabel.innerText = "Name: ";
    form.appendChild(createLabel);
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "expense[name]");
    inputName.setAttribute("placeholder", "Name");
    form.appendChild(nameLabel);
    form.appendChild(inputName);

    let inputCost = document.createElement('input');
    let costLabel = document.createElement("label")
    costLabel.innerText = "Cost: ";
    inputCost.setAttribute("type", "number");
    inputCost.setAttribute("name", "expense[cost]");
    inputCost.setAttribute("placeholder", "Cost");
    form.appendChild(costLabel);
    form.appendChild(inputCost);

    let inputDate = document.createElement('input');
    let dateLabel = document.createElement("label")
    dateLabel.innerText = "Date: ";
    inputDate.setAttribute("type", "text");
    inputDate.setAttribute("name", "expense[date]");
    inputDate.setAttribute("placeholder", "Date");
    form.appendChild(dateLabel);
    form.appendChild(inputDate);

    let inputId = document.createElement('input');
    inputId.setAttribute("type", "hidden");
    inputId.setAttribute("name", "expense[budget_id]");
    // inputId.setAttribute("value", `${}`);
    form.appendChild(inputId);

    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("name", "submit");
    inputSubmit.setAttribute("value", "Submit");
    form.appendChild(inputSubmit);

}


