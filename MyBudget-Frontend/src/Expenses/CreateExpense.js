function createExpense(object){
    
    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        redirect: "follow",
        body: JSON.stringify(object)
    }

    const fetcher = async() => {
        const response = await fetch('http://localhost:3000/expenses', fetchObject)
        const json = await response.json()
        if (json.message === "Not Accepted"){
            new ExpenseError(object.budget_id)
        } else {
            console.log(json)
            // let expenseObj = {id: json.data.id, ...json.data.attributes, user_id: json.data.attributes.user_id}
            // new Expense(expenseObj);
        }
    }
    fetcher()
}