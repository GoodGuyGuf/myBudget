let nav = document.getElementById("nav");
nav.style.display = "none";
let budgetForm = document.getElementById("budgetForm");
budgetForm.style.display = "none";
let signup = document.getElementById("SignUp");
signup.style.display = "none";

let login = document.getElementById("LogIn");
login.style.display = "none";

let loggingIn = document.getElementById("loggingIn");
let signinSelection = document.getElementById("signinSelection");

let signingUp = document.getElementById("signingUp");

loggingIn.addEventListener("click", function(){
signinSelection.style.display = "none";
login.style.display = ""
})

signingUp.addEventListener("click", function(){
    signinSelection.style.display = "none";
    signup.style.display = ""
    })

function signupFetch(userObject){

    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(userObject)
    }
    
    fetch('http://localhost:3000/users', fetchObject)
        .then(resp => resp.json())
        .then(function(json){
             console.log(json)
             if (json.message === "No User Found."){
                 let p = document.createElement("p");
                 p.id="incorrectPswrd";
                 p.innerText = "Password is incorrect.";
                 document.body.appendChild(p)
             } else {
                 console.log(json)
                let userObj = {id: json.data.id, username: json.data.attributes.username, budgets: json.data.attributes.budgets }
                new User (userObj)
             }
        })
        .catch(function(error) {
            alert("Something has gone wrong.");
            console.log(error.message);
        });
    }
    
let signingInForm = document.getElementById("SignUp");

    signingInForm.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.querySelector("#username").value;
        let pswrd = document.querySelector("#password").value;
        let userObject = {username: name, password: pswrd};
        signupFetch(userObject);
    })