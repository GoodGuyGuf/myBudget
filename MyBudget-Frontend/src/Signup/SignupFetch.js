function signupUser(userObject) {
    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObject)
    }

    const fetcher = async() => {
        const response = await fetch('http://localhost:3000/users', fetchObject)
        const json = await response.json()
        if (json.message === "Something went wrong"){
            new LoginError
        } else {
           let userObj = {
               id: json.data.id, 
               username: json.data.attributes.username, 
               budgetsCount: json.data.attributes.budgets_count
            }
           if (userObj){
                new User (userObj)
                new Home(userObj.username, userObj.budgetsCount, userObj.id)
           }
            const signupForm = document.getElementById("signupForm");
            const signup = document.getElementById("SignUp");
            const login = document.getElementById("loginDiv");

            signupForm.remove()
            login.remove();
            signup.remove();
        }
    }
    fetcher()
}