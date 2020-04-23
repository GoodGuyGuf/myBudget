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