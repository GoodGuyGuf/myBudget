let filterSubmit = document.getElementById("filterSubmit")

filterSubmit.addEventListener("click", function(){
    let filterValue = document.getElementById("BudgetFilter").value

    let filteredBudgets = Budget.all.filter(function(budget){
        return budget.bank === filterValue
    })

    let div = document.createElement("div")
    div.id='filtered'
    let ol = document.createElement("ol")
    ol.id='filteredOl'

    document.body.appendChild(div)
    document.body.appendChild(ol)

    filteredBudgets.forEach(element => {
        let budgetForm = document.getElementById("budgetForm")
        let li = document.createElement("li")
        li.innerHTML = `${element.title}`
        budgetForm.appendChild(li)
        setTimeout(() => {
            li.remove()
        }, 5000);
    });

})
