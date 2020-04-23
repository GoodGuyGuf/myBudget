class Home {
    constructor(user, num, user_id){
        this.numberOfBudgets = document.createElement("p");
        this.numberOfBudgets.innerHTML = `Number of Budgets: ${num}`;
        document.body.appendChild(this.numberOfBudgets);

        this.username = document.createElement("p");
        this.username.innerHTML = `Username: ${user}`
        document.body.appendChild(this.username)

        this.logout = document.createElement('a');
        this.logout.id = "logout";
        this.logout.innerHTML = "<a href='Logout'>Log Out</a>"
        document.body.appendChild(this.logout)

        this.budgetForm = new BudgetForm(user_id)
        fetchExpenses()
        fetchBudgets()
        this.handleLogout()
    }

    handleLogout(){
        this.logout.addEventListener("click", event => {
            event.preventDefault();

            document.body.innerHTML = "";
            new App;
        })
    }
}