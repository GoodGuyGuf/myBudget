class ExpenseError{
    constructor(budgetId){
        this.budget = document.getElementById(`Budget${budgetId}RemainingBalance`);
        this.errorMessage = document.createElement("p");
        this.errorMessage.id = "ExpenseError";
        this.errorMessage.innerHTML = "Fields cannot be blank!"
        this.budget.appendChild(this.errorMessage)

        setTimeout(() => {
            this.errorMessage.remove()
        }, 3000);
    }   
}