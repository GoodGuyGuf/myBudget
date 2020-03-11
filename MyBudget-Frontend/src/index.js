let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

budgetLink.addEventListener("click", function(){
    appendElements()
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

function appendElements(){
    for (array of Budget.all){
    let h1 = document.createElement("h1");
    h1.id = `Budget${array.id}`
    h1.textContent = `Budget for: ${array.title} - Balance: $${array.bank}`;
    document.body.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.textContent = `Expense: Name: ${array.expenses[0].name} - $${array.expenses[0].cost} - Due: ${array.expenses[0].date}`;
    document.body.appendChild(h3);
    createExpenseForm(array.id);
    }
}

function createExpenseForm(id){
    let formDiv = document.createElement("div")
    formDiv.id = "expenseForm"
    formDiv.innerHTML = `<div id="form">
    <form action="http://localhost:3000/budgets" method="POST">
        <label>Name: </label>
        <input id="name${id}" type="text" name="expense[name]" placeholder="Name">
        <label>Cost: </label>
        <input id="cost${id}" type="number" name="expense[cost]" placeholder="Cost">
        <label>Date: </label>
        <input id="date${id}" type="text" name="expense[date]" placeholder="Date">
        <input type="hidden" name="expense[budget_id]" value="${id}">
      <button id='submit' type='button'>Submit</button>
    </form>
  </div>`
  document.body.appendChild(formDiv)
}

