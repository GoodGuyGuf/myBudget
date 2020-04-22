class App {
    constructor(){
        this.logo = document.createElement("h1")
        this.logo.innerHTML = "<h1>myBudget</h1>"
        document.body.appendChild(this.logo)
        
        this.app = new Login
    }

}

new App
