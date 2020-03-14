class User {
    constructor({id, name, password}){
        this.id = id
        this.name = name
        this.password = password
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
    
    fetch('http://localhost:3000/users', fetchObject)
        .then(resp => resp.json())
        .then(function(json){
             console.log(json)
        })
        .catch(function(error) {
            alert("Something has gone wrong.");
            console.log(error.message);
        });
    }
    
let loggingInForm = document.getElementById("LogIn");

    loggingInForm.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.querySelector("#username").value;
        let pswrd = document.querySelector("#password").value;
        let userObject = {username: name, password: pswrd};
        loginFetch(userObject);
    })