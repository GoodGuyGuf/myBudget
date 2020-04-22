// // Originall was in index.js file:
// let budgetLink = document.getElementById("navBudgets");
// let numberOfBudgets = document.getElementById("navInfo");


// function allBudgets(){ //fetches the budgets and makes objects out of the response
    
//     fetch("http://localhost:3000/budgets")
//     .then(function(response){
//         return response.json()
//     }).then(function(json){
//         json.data.forEach(function(budget){
//             let obj = {id: budget.id, ...budget.attributes, user_id: budget.attributes.user_id};
//             new Budget(obj);
//         })
//         appendElements()
//         numberOfBudgets.innerText = `Number of Budgets: ${User.currentUser().budgets.length}`;
//     })
    
// }

// function appendElements(){ //grabs each Budget.all and appends to DOM
//     for (let i = 0; i < User.currentUser().budgets.length; i++){
    
//     let div = document.createElement("div");
//     div.id=`BudgetDiv${User.currentUser().budgets[i].id}`;
//     div.className="BudgetDiv"
//     document.body.appendChild(div);
//     let h1 = document.createElement("h1");

//     h1.id = `Budget${User.currentUser().budgets[i].id}`
//     h1.textContent = `Budget for: ${User.currentUser().budgets[i].title} - Balance: $${User.currentUser().budgets[i].bank}`;
//     div.appendChild(h1);

//     let ul = document.createElement("ul");
//     ul.id =`expenses${User.currentUser().budgets[i].id}`;
//     div.appendChild(ul)
// }
// appendExpensesDOM()
// }

// function appendExpensesDOM(){ 

//     for (let i = 0; i < User.currentUser().budgets.length; i++){


//         let div = document.getElementById(`BudgetDiv${User.currentUser().budgets[i].id}`)
//         let h4 = document.createElement("h4");
//         let h5 = document.createElement("h5");
//         h5.id=`remainingValue${User.currentUser().budgets[i].id}`

//         h4.textContent = "Remaining balance:";
//         h5.textContent = `$${User.currentUser().budgets[i].remainingBalance}`;
//         div.appendChild(h4);
//         div.appendChild(h5);
//         createExpenseForm(User.currentUser().budgets[i].id);
//     }
//     ExpenseAppender()
// }

// function ExpenseAppender(){
//     if (User.currentUser().expenses.length !== 0){
//         for (let i = 0; i < User.currentUser().expenses.length; i++){
//             let ul = document.getElementById(`expenses${User.currentUser().expenses[i].budgetId}`)
//             let li = document.createElement("li");

//             li.textContent = `Expense: Name: ${User.currentUser().expenses[i].name} - $${User.currentUser().expenses[i].cost} - Due: ${User.currentUser().expenses[i].date}`;
//             ul.appendChild(li);
//         }
//     }
// }
