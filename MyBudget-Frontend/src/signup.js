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

loggingIn.addEventListener("click", function(){
signinSelection.style.display = "none";
login.style.display = ""
})