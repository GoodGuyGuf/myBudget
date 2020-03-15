class User {

    static all = []

    constructor({id, username}){
        this.id = parseInt(id)
        this.username = username

        User.all.push(this)
    }

    get budgets(){
        return Budget.all.find(function(budget){
            return budget.userId === this.id
        }, this)
    }

}

function loginFetch(userObject){

    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(userObject)
    }
    
    fetch('http://localhost:3000/login', fetchObject)
        .then(resp => resp.json())
        .then(function(json){
             if (json.message === "No User Found."){
                 let p = document.createElement("p");
                 p.id="incorrectPswrd";
                 p.innerText = "Password is incorrect.";
                 document.body.appendChild(p)
             } else {
                let userObj = {id: json.data.id, username: json.data.attributes.username}
                new User (userObj)

                let loginForm = document.getElementById("LogIn")
                loginForm.style.display = "none";
                allBudgets()
             }
        })
        .catch(function(error) {
            alert("Something has gone wrong.");
            console.log(error.message);
        });
    }
    
let loggingInForm = document.getElementById("LogIn");

    loggingInForm.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.querySelector("#usernameLogin").value;
        let pswrd = document.querySelector("#passwordLogin").value;
        let userObject = {username: name, password: pswrd};
        loginFetch(userObject);
    })