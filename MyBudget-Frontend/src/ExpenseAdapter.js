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
        new Expense (json);
        expenseAddToDom(json)
    })
    .catch(function(error) {
        alert("Fetch has gone through. Something else has gone wrong.");
        console.log(error.message);
      });
    }
}

function expenseAddToDom(object) {

    let budget = document.getElementById(`expenses${object.budget_id}`)
    let remaining = document.getElementById(`remainingValue${object.budget_id}`)
    let remainingValue = parseInt(remaining.innerText.slice(1))
    let li = document.createElement("li");

    li.textContent = `Expense: Name: ${object.name} - $${object.cost} - Due: ${object.date}`;
    budget.appendChild(li);

    if (remainingValue === 0){
        remaining.innerHTML = "$0"
    } else {
        remaining.innerHTML = `$${remainingValue - object.cost}`
    }
}