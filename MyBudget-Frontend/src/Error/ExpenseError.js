class ExpenseError{
    constructor(budgetId){
        this.budget = document.getElementById(`Budget${budgetId}RemainingBalance`);
        this.errorMessage = document.createElement("p");
        this.errorMessage.id = "ExpenseError";
        this.errorMessage.innerHTML = "There has been an error with your submission."
        this.budget.appendChild(this.errorMessage)

        setTimeout(() => {
            this.errorMessage.remove()
        }, 3000);
    }   
}