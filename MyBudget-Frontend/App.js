class App {
    constructor(){
        this.logo = document.createElement("h1");
        this.logo.id = "Logo";
        this.logo.innerHTML = "<h1>myBudget</h1>";
        document.body.appendChild(this.logo);
        
        new Login;
    }

}
