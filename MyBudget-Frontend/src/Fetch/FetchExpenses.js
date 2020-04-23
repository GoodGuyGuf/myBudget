function fetchExpenses() {
    let fetchObject = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    const fetcher = async() => {
        const response = await fetch('http://localhost:3000/expenses', fetchObject)
        const json = await response.json()
        
        const userExpenses = json.data.filter(expense => {
            return expense.attributes.user_id === User.currentUser().id
        })
        
        userExpenses.forEach(expense => {
            let obj = {id: expense.id,
                 ...expense.attributes
                }
                setTimeout(() => new Expense(obj), 500)
            // new Expense(obj);
        })
    }
    fetcher()
}

// function expenseAddToDom(expense) {

//     let budget = document.getElementById(`expenses${expense.budget_id}`)
//     let remaining = document.getElementById(`remainingValue${expense.budget_id}`)
//     let div = document.getElementById(`BudgetDiv${expense.budget_id}`)
//     let remainingValue = parseInt(remaining.innerText.slice(1))
//     let ul = document.createElement("ul");
//     ul.id=`expenses${expense.budget_id}`
//     let li = document.createElement("li");

//     li.textContent = `Expense: Name: ${expense.name} - $${expense.cost} - Due: ${expense.date}`;
//     if (document.querySelector(`#expenses${expense.budget_id}`) === null){
//         div.appendChild(ul)
//         div.appendChild(li)
//     } else {
//         budget.appendChild(li)
//     }


//     if (remainingValue === 0){
//         remaining.innerHTML = "$0"
//     } else {
//         remaining.innerHTML = `$${remainingValue - expense.cost}`
//     }
// }