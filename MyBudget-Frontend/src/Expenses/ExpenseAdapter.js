class ExpenseAdapter{
    constructor(url){
        this.url = url
    }

    static newExpense(expenseObject) {
        let fetchObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            redirect: "follow",
            body: JSON.stringify(expenseObject)
        }
    fetch("http://localhost:3000/expenses", fetchObject)
        .then(function(response) { 
        return response.json()
    })
    .then(function(json){
        let expObj = {budgetId: json.id, ...json, userId: json.user_id}
        new Expense (expObj);
        console.log(json)
        expenseAddToDom(json)
    })
    .catch(function(error) {
        alert("Fetch has gone through. Something else has gone wrong.");
        console.log(error.message);
      });
    }
}

function expenseAddToDom(expense) {

    let budget = document.getElementById(`expenses${expense.budget_id}`)
    let remaining = document.getElementById(`remainingValue${expense.budget_id}`)
    let div = document.getElementById(`BudgetDiv${expense.budget_id}`)
    let remainingValue = parseInt(remaining.innerText.slice(1))
    let ul = document.createElement("ul");
    ul.id=`expenses${expense.budget_id}`
    let li = document.createElement("li");

    li.textContent = `Expense: Name: ${expense.name} - $${expense.cost} - Due: ${expense.date}`;
    if (document.querySelector(`#expenses${expense.budget_id}`) === null){
        div.appendChild(ul)
        div.appendChild(li)
    } else {
        budget.appendChild(li)
    }


    if (remainingValue === 0){
        remaining.innerHTML = "$0"
    } else {
        remaining.innerHTML = `$${remainingValue - expense.cost}`
    }
}