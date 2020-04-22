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
        } else {
           let userObj = {
               id: json.data.id, 
               username: json.data.attributes.username, 
               budgetsCount: json.data.attributes.budgets_count
            }
           if (userObj){
                console.log(userObj)

                new User (userObj)
                new Home(userObj.username, userObj.budgetsCount)
           }
        }
    }

    fetcher()
    }