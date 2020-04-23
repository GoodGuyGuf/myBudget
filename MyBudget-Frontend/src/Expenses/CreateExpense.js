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
        console.log(json)
        // if (json.message === "Fields cannot be blank"){
        //     let budgetForm = document.getElementById("budgetForm")
        //     let p = document.createElement("p")
        //     p.id="errorFieldMessage"
        //     p.innerText = json.message
        //     budgetForm.appendChild(p)
        //     setTimeout(() => {
        //         p.remove()
        //     }, 3000);
        // } else {
        //     let navUserGrab = document.getElementById("navUser")
        //     let userName = navUserGrab.innerText.slice(6)
        //     let foundUser = User.all.find(user => user.username === userName)
        //     let budgetObj = {id: json.data.id, ...json.data.attributes, user_id: foundUser.id}
        //     new Budget(budgetObj);
        //     addToDom(json.data.id, json.data.attributes);
        // }
    }

    fetcher()

}