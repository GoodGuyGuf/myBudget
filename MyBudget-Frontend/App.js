class App {
    constructor(){
        this.header = document.createElement("header");

        /* .setAttribute() is another way to set an attribute on a Node Object. 
            Originally we were taught to just write: this.logo.id = "Logo"; */

        this.logo = document.createElement("h1");
        this.logo.setAttribute("id", "Logo"); 

        /* .createTextNode() is another way to set innerHTML in a Node Object instead of writing: this.logoText = "myBudget"; */

        this.logoText = document.createTextNode("myBudget");

        this.logo.appendChild(this.logoText);
        this.header.appendChild(this.logo);

        document.body.appendChild(this.header);
        
        new Login;
    }

}
