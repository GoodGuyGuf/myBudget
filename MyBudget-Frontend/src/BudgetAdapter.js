class BudgetAdapter{
    constructor(url){
        this.url = url
    }

    static newBudget(budgetObject) {
        let fetchObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            redirect: "follow",
            body: JSON.stringify(budgetObject)
        }
    fetch("http://localhost:3000/budgets", fetchObject)
        .then(function(response) { 
        return response.json()
    })
    .then(function(json){
        new Budget(json);
        addToDom(json.data.attributes)
    })
    .catch(function(error) {
        alert("Fetch has gone through. Something else has gone wrong.");
        console.log(error.message);
      });
    }

}

function addToDom(object) {
    let newH1 = document.createElement("h1");
    newH1.id = `Budget${object.id}`;
    newH1.textContent = `Budget for: ${object.title} - Balance: $${object.bank}`;
    document.body.appendChild(newH1);
    createExpenseForm(object.budgetId);
}