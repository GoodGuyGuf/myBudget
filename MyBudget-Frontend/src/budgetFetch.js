let budgetSubmit = document.getElementById("budgetSubmit");
budgetSubmit.addEventListener("click", function(){
    let budgetTitle = document.querySelector("#budgetTitle").value
    let budgetBank = document.querySelector("#budgetBank").value
    let budgetObject = {title: budgetTitle, bank: budgetBank}
    BudgetAdapter.newBudget(budgetObject)
})