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

/* *Using these methods provides functionality for older browsers.* There is a new method to use that would simplifiy 
    the procedure above, and that is by using .append() - which will append any string to a specified parent node. 
    HOWEVER, the .append() method does NOT work for oldr browsers. 
*/

/* If you were to write the code above by using .append() only, it would look like this: 

    this.header = document.createElement("header");
    this.logo = document.createElement("h1");
    this.logo.setAttribute("id", "Logo"); 
    this.logo.append("myBudget");

    this.header.appendChild(this.logo);
    document.body.appendChild(this.header);

*/