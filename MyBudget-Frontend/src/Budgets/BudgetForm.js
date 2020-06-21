class BudgetForm{
    constructor(user_id){
        this.userId = user_id

        this.section = document.createElement("section");
        this.section.id = "budgetFormContainer";
        this.section.innerHTML = `
          <form id='budgetForm' action='http://localhost:3000/budgets' method='POST'>
            <h2>New Budget: </h2>
            <input id='budgetTitle' type='text' name='budget[title]' placeholder='Title'><br/>
            <input id='budgetBank' type='number' name='budget[bank]' placeholder='Budget Total'><br/>
            <button id='budgetSubmit' type='submit'>Submit</button>
          </form>`

        document.body.appendChild(this.section);

        this.budgetSubmit();
    }

    budgetSubmit(){
      document.querySelector("#budgetForm").addEventListener("submit", event => {
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