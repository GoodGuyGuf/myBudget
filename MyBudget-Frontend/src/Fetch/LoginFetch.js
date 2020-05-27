function loginFetch(userObject){

    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(userObject)
    }

    const fetcher = async () => {
        const response = await fetch('http://localhost:3000/login', fetchObject)
        const json = await response.json();
        if (json.message === "No User Found."){
            new LoginError
            new Login
        } else {
           let userObj = {
               id: json.data.id, 
               username: json.data.attributes.username, 
               budgetsCount: json.data.attributes.budgets_count
            }
           if (userObj){
                new User (userObj) // loginFetch directs to here, where it creates a new user object
                new Home(userObj.username, userObj.budgetsCount, userObj.id)  // Then it will render the next part of the application,
           } // The home screen.
        }
    }

    fetcher()
}