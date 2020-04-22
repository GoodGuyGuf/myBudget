class Login {

    constructor(){
        this.form = document.createElement("form")
        this.form.innerHTML = "<div id='LogIn'>" + 
        "<form id='loginForm' action='http://localhost:3000/users' method='POST'>" +
          "<h2>Login</h2>" +
          "<input id='usernameLogin' type='text' name='user[username]' placeholder='Username'><br />" +
          "<input id='passwordLogin' type='password' name='user[password]' placeholder='Password'><br />" +
          "<input type='submit' name='submit' value='Submit'>" +
        "</form>" +
      "</div>"

      document.body.appendChild(this.form)

      this.signupLink = document.createElement("div")
        this.signupLink.innerHTML = 
        "<div id='signup'>" +
            "<h3>Don't Have An Account?</h3>" +
            "<button id='signupButton'>Sign up</button>" +
        "</div>"

      document.body.appendChild(this.signupLink)
      this.hideLogin()
    }

    hideLogin(){
      const signupButton = document.getElementById("signupButton");
      const signup = document.getElementById("signup");
      const login = document.getElementById("LogIn");

      signupButton.addEventListener("click", () => {
          new Signup
          login.remove()
          signup.remove()
      })
  }
}