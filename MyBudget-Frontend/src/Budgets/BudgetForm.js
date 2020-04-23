class BudgetForm{
    constructor(){

        this.div = document.createElement("div");
        this.div.id = "budgetFormContainer";
        document.body.appendChild(this.div);

        this.form = document.createElement("form");
        this.form.id = "budgetForm"
        this.form.innerHTML = "<form action='http://localhost:3000/budgets' method='POST'>" +
          "<h2>New Budget: </h2>" +
          "<label>Title:</label>" +
          "<input id='budgetTitle' type='text' name='budget[title]' placeholder='Title'><br/>" +
          "<label>Total:</label>" +
          "<input id='budgetBank' type='number' name='budget[bank]' placeholder='Budget Total'><br/>" +
          "<button id='budgetSubmit' type='button'>Submit</button>" +
        "</form>"

        this.div.appendChild(this.form)
        
    }
}