class Signup {
    constructor(){

      this.div = document.createElement("div");
      this.div.id="SignUp";
      document.body.appendChild(this.div);

      this.form = document.createElement("form")
      this.form.id = 'signupForm'
      this.form.innerHTML = "<form action='http://localhost:3000/users' method='POST'>" +
          "<h2>Sign up</h2>" +
          "<input id='username' type='text' name='user[username]' placeholder='Username'/><br/>" +
          "<input id='password' type='password' name='user[password]' placeholder='Password'/><br/>" +
          "<input type='submit' name='submit' value='Submit'/>" +
        "</form>"

      this.loginLink = document.createElement("div")
      this.loginLink.innerHTML = 
      "<div id='loginDiv'>" +
          "<h3>Already Have An Account?</h3>" +
          "<button id='loginButton'>Log In</button>" +
      "</div>"
      
      this.div.appendChild(this.form)

      document.body.appendChild(this.loginLink)
      this.hideSignup()
      this.handleSignUp()
    }

    handleSignUp(){
      this.form.addEventListener("submit", event => {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        const userObj = {
          username: username,
          password: password
        }
        signupUser(userObj)
      })
    }

      hideSignup(){
        const loginButton = document.getElementById("loginButton");
        const signup = document.getElementById("SignUp");
        const signupForm = document.getElementById("signupForm");
        const loginLinker = document.getElementById("loginDiv")
  
        loginButton.addEventListener("click", () => {
            new Login
            signupForm.remove()
            signup.remove()
            loginLinker.remove()
        })
    }
}