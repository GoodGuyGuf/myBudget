class Home {
    constructor(user, num, user_id){
        /* 
            This creates the number of budgets header which shows you how many budgets you have.
            Your username appears in the top left corner from this.username 
        */ 
        this.sectionUserData = document.createElement("section");
        this.sectionUserData.id = 'UserData';
        this.sectionUserData.innerHTML = `
            <p id='budgetCount'>Number of Budgets: ${num}</p>
            <p id='currentUser'>Username: ${user}</p>
            <a id='logout' href='Logout'>Log Out</a>
        `;
        document.body.appendChild(this.sectionUserData);

        this.budgetForm = new BudgetForm(user_id);
        fetchExpenses(); // This is where all fetch objects are created. The next parts of the application are formed because when an
        fetchBudgets();  // expense or a budget is made, they are automatically configured with elements that append to the DOM.
        this.handleLogout();
    }

    handleLogout(){
        this.logout.addEventListener("click", event => {
            event.preventDefault();

            document.body.innerHTML = "";
            User.loggedIn = {};
            Budget.all = [];
            Expense.all = [];
            new App; // if the user logs out, the documents body will be set to nothing and a new App class will render.
        })
    }
}