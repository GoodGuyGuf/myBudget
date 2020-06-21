class App {
    constructor(){
        this.header = document.createElement("header");
        document.body.appendChild(this.header);

        this.logo = document.createElement("h1");
        this.logo.id = "Logo";
        this.logo.innerHTML = "myBudget";
        this.header.appendChild(this.logo);
        
        new Login;
    }

}
