class BudgetError{
    constructor(){
        this.budget = document.getElementById("budgetFormContainer");
        this.errorMessage = document.createElement("p");
        this.errorMessage.id = "BudgetError";
        this.errorMessage.innerHTML = "Fields cannot be blank!"
        this.budget.appendChild(this.errorMessage)

        setTimeout(() => {
            this.errorMessage.remove()
        }, 3000);
    }   
}