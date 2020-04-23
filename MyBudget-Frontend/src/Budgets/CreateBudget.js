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
            new BudgetError
        } else {
            let budgetObj = {id: json.data.id, ...json.data.attributes}
            new Budget(budgetObj);
        }
    }
    fetcher()
}