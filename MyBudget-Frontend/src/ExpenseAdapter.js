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
    let h3 = document.createElement("h3");
    h3.textContent = `Expense: Name: ${object.name} - $${object.cost} - Due: ${object.date}`;
    document.body.appendChild(h3);
}