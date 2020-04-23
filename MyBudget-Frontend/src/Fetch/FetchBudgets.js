function fetchBudgets(){

    let fetchObject = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        } 
    }
    const fetcher = async() => {
    const response = await fetch('http://localhost:3000/budgets', fetchObject)
    const json = await response.json()
    
    const userBudgets = json.data.filter(budget => {
        return budget.attributes.user_id === User.currentUser().id
    })

    userBudgets.forEach(budget => {
        let obj = {id: budget.id, ...budget.attributes, user_id: budget.attributes.user_id};
        new Budget(obj);
    })
    }

    fetcher()
}

