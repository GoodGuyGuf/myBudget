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
        return response.json();
    })
    .then(function(json){
        new Budget(json);
        console.log(json.data);
        addToDom(json.data.id, json.data.attributes);
    })
    .catch(function(error) {
        alert("Fetch has gone through. Something else has gone wrong.");
        console.log(error.message);
      });
    }

}

function addToDom(id, object) {

    let numberOfBudgets = document.getElementById("navInfo");
    numberOfBudgets.innerText = `Number of Budgets: ${Budget.all.length}`;
    let div = document.createElement("div");
    div.id=`BudgetDiv${id}`;
    
    let newH1 = document.createElement("h1");
    newH1.id = `Budget${id}`;
    newH1.textContent = `Budget for: ${object.title} - Balance: $${object.bank}`;

    let remaining = document.createElement("h4")
    remaining.innerText="Remaining Balance:";

    let remainingValue = document.createElement("h4")
    remainingValue.innerText=`$${object.bank}`;

    document.body.appendChild(div);
    div.appendChild(newH1);
    createExpenseForm(id);

    document.body.appendChild(remaining);
    document.body.appendChild(remainingValue);
}