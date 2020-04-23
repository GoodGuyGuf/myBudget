function createBudget(object){
    
    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
    }

    const fetcher = async() => {
        const response = await fetch('http://localhost:3000/budgets', fetchObject)
        const json = await response.json()
        if (json.message === "Fields cannot be blank"){
            // new BudgetError
            console.log(json)
        } else {
            console.log(json)
            // let budgetObj = {id: json.data.id, ...json.data.attributes}
            // new Budget(budgetObj);
        }
    }
    fetcher()
}
// function newBudget(budgetObject) {
//         let fetchObject = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }, 
//             redirect: "follow",
//             body: JSON.stringify(budgetObject)
//         }
//     fetch("http://localhost:3000/budgets", fetchObject)
//         .then(function(response) { 
//         return response.json();
//     })
//     .then(function(json){
//         console.log(json)
//         if (json.message === "Fields cannot be blank"){
//             let budgetForm = document.getElementById("budgetForm")
//             let p = document.createElement("p")
//             p.id="errorFieldMessage"
//             p.innerText = json.message
//             budgetForm.appendChild(p)
//             setTimeout(() => {
//                 p.remove()
//             }, 3000);
//         } else {
//             let navUserGrab = document.getElementById("navUser")
//             let userName = navUserGrab.innerText.slice(6)
//             let foundUser = User.all.find(user => user.username === userName)
//             let budgetObj = {id: json.data.id, ...json.data.attributes, user_id: foundUser.id}
//             new Budget(budgetObj);
//             addToDom(json.data.id, json.data.attributes);

//         // let budget = new Budget(budgetObj);
//         // budget.partialrender - partialrender would contain the code that appends to DOM
//         }
//     })
//     .catch(function(error) {
//         alert("Fetch has gone through. Something else has gone wrong.");
//         console.log(error.message);
//       });
//     }

// function addToDom(id, object) {

//     numberOfBudgets.innerText = `Number of Budgets: ${Budget.all.length}`;
//     let div = document.createElement("div");
//     div.id=`BudgetDiv${id}`;
//     div.className="BudgetDiv"

//     div.innerHTML = `<h1 id='Budget${id}'>Budget for: ${object.title} - Balance: $${object.bank}</h1>
//     <ul id='expenses${id}'></ul>
//     <h4>Remaining Balance</h4>
//     <h4 id='remainingValue${id}'>$${object.bank}</h4>`

//     document.body.appendChild(div);
//     createExpenseForm(id);
// }


// // Originally was in the file BudgetFetch:
// let budgetSubmit = document.getElementById("budgetSubmit");
// budgetSubmit.addEventListener("click", function(){
//     let budgetTitle = document.querySelector("#budgetTitle").value
//     let budgetBank = document.querySelector("#budgetBank").value
//     let budgetObject = {title: budgetTitle, bank: budgetBank, user_id: User.currentUser().id}
//     newBudget(budgetObject)
// })