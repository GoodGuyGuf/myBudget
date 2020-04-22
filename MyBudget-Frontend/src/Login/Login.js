class Login {

    constructor(){

      this.div = document.createElement("div");
      this.div.id="LogIn";
      document.body.appendChild(this.div);

      this.form = document.createElement("form");
      this.form.id = "loginForm";
      this.form.innerHTML = 
      "<form action='http://localhost:3000/users' method='POST'>" +
          "<h2>Login</h2>" +
          "<input id='usernameLogin' type='text' name='user[username]' placeholder='Username'/><br />" +
          "<input id='passwordLogin' type='password' name='user[password]' placeholder='Password'/><br />" +
          "<input type='submit' name='submit' value='Submit'/>" +
        "</form>"

      this.div.appendChild(this.form);

      this.signupLink = document.createElement("div");
      this.signupLink.id='signup'
      this.signupLink.innerHTML = "<h3>Don't Have An Account?</h3><button id='signupButton'>Sign up</button>"

      document.body.appendChild(this.signupLink);

      this.hideLogin();
      this.logInSubmit()
    }

    hideLogin(){
      const login = document.getElementById("LogIn");
      const signupButton = document.getElementById("signupButton");
      const signup = document.getElementById("signup");

      signupButton.addEventListener("click", () => {
          new Signup;
          signupButton.remove()
          login.remove();
          signup.remove();
      })
    }

    logInSubmit(){
      const loginForm = document.getElementById("loginForm");
      const signup = document.getElementById("signup");

      loginForm.addEventListener("submit", event => {
        event.preventDefault()
        let name = document.querySelector("#usernameLogin").value;
        let pswrd = document.querySelector("#passwordLogin").value;
        let userObject = {username: name, password: pswrd};
        loginFetch(userObject);
        loginForm.remove()
        signup.remove()
      })
    }
}