function budgetFetch(){
fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {id: budget.id, ...budget.attributes, user_id: budget.attributes.user_id};
            new Budget(obj);
        })
    })
}

