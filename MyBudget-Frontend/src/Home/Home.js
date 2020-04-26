class Home {
    constructor(user, num, user_id){
        this.numberOfBudgets = document.createElement("p"); // This creates the number of budgets header which shows you how many budgets you have.
        this.numberOfBudgets.innerHTML = `Number of Budgets: ${num}`;
        document.body.appendChild(this.numberOfBudgets);

        this.username = document.createElement("p"); // Your username appears in the top left corner from this.username
        this.username.innerHTML = `Username: ${user}`
        document.body.appendChild(this.username)

        this.logout = document.createElement('a'); // This generates the logout link.
        this.logout.id = "logout";
        this.logout.innerHTML = "<a href='Logout'>Log Out</a>"
        document.body.appendChild(this.logout)

        this.budgetForm = new BudgetForm(user_id)
        fetchExpenses() // This is where all fetch objects are created. The next parts of the application are formed because when an
        fetchBudgets()  // expense or a budget is made, they are automatically configured with elements that append to the DOM.
        this.handleLogout()
    }

    handleLogout(){
        this.logout.addEventListener("click", event => {
            event.preventDefault();

            document.body.innerHTML = "";
            User.all = []
            Budget.all = []
            Expense.all = []
            new App; // if the user logs out, the documents body will be set to nothing and a new App class will render.
        })
    }
}