class BudgetForm{
    constructor(user_id){
        this.userId = user_id
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
          "<input id='budgetSubmit' type='submit'>" +
        "</form>"

        this.div.appendChild(this.form);
        this.budgetSubmit();
    }

    budgetSubmit(){
      this.form.addEventListener("submit", event => {
        event.preventDefault();
        let title = document.getElementById("budgetTitle").value
        let balance = document.getElementById("budgetBank").value
        let budgetObject = {
          title: title,
          bank: balance,
          user_id: this.userId
        }
        createBudget(budgetObject)
      })
    }
}