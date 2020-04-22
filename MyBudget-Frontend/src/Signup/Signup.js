class Signup {
    constructor(){
        this.form = document.createElement("form")
        this.form.innerHTML = "<div id='SignUp'>" + 
        "<form id='signupForm' action='http://localhost:3000/users' method='POST'>" +
          "<h2>Sign up</h2>" +
          "<input id='username' type='text' name='user[username]' placeholder='Username'><br/>" +
          "<input id='password' type='password' name='user[password]' placeholder='Password'><br/>" +
          "<input type='submit' name='submit' value='Submit'>" +
        "</form>" +
      "</div>"

      this.loginLink = document.createElement("div")
      this.loginLink.innerHTML = 
      "<div id='loginDiv'>" +
          "<h3>Already Have An Account?</h3>" +
          "<button id='loginButton'>Log In</button>" +
      "</div>"
      
      document.body.appendChild(this.form)

      document.body.appendChild(this.loginLink)
      this.hideSignup()
    }

      hideSignup(){
        const loginButton = document.getElementById("loginButton");
        const signup = document.getElementById("SignUp");
        const login = document.getElementById("LogIn");
        const loginLinker = document.getElementById("loginDiv")
  
        loginButton.addEventListener("click", () => {
            loginLinker.remove()
            login.remove()
            signup.remove()
            new Login
        })
    }
}