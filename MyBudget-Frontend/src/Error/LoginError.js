class LoginError {
    constructor(){
        this.error = document.createElement("p");
        
        this.error.id="incorrectPswrd";
        this.error.innerHTML = "Password is incorrect.";

        document.body.appendChild(this.error)

        this.interval = setTimeout(() => this.error.remove(), 3000)
    }
}