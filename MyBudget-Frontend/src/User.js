class User {

    static all = []

    constructor({id, username, budgets}){
        this.id = id
        this.username = username
        this.budgets = budgets

        User.all.push(this)
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
             console.log(json)
             if (json.message === "No User Found."){
                 let p = document.createElement("p");
                 p.id="incorrectPswrd";
                 p.innerText = "Password is incorrect.";
                 document.body.appendChild(p)
             } else {
                let userObj = {id: json.data.id, username: json.data.attributes.username, budgets: json.data.attributes.budgets }
                new User (userObj)
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