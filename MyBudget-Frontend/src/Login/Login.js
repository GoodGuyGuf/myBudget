class Login {

    constructor(){

      this.section = document.createElement("section");
      this.section.id="LogIn";
      this.section.innerHTML = `
        <form id='loginForm' action='http://localhost:3000/users' method='POST'>
          <div class='loginFlex'>
            <h2>Login</h2>
          </div>

          <div class='loginFlex'>
            <label for='usernameLogin'>Username:</label>
            <input class='loginInput' id='usernameLogin' type='text' name='user[username]' placeholder='Username'/>
          </div>

          <div class='loginFlex'>
            <label for='passwordLogin'>Password:</label>
            <input class='loginInput' id='passwordLogin' type='password' name='user[password]' placeholder='Password'/>
          </div>

          <div class='loginFlex'>
            <input class='loginInput' id='loginSubmit' type='submit' value='Submit'>
          </div>
        </form>`;

      document.body.appendChild(this.section);

      this.signupLink = document.createElement("section");
      this.signupLink.id='signup'
      this.signupLink.innerHTML = `
        <h3>Don't Have An Account?</h3>
        <button id='signupButton'>Sign up</button>
      `

      document.body.appendChild(this.signupLink);

      this.hideLogin();
      this.logInSubmit()
    }

    hideLogin(){
      const login = document.getElementById("LogIn");
      const signupButton = document.getElementById("signupButton");
      const signup = document.getElementById("signup");

      signupButton.addEventListener("click", () => {
          new Signup; // <- this marks where the User chooses the signup option. The login form will be removed.
          signupButton.remove()
          login.remove();
          signup.remove();
      })
    }

    logInSubmit(){
      const login = document.getElementById("LogIn");
      const signup = document.getElementById("signup");

      loginForm.addEventListener("submit", event => {
        event.preventDefault()
        let name = document.querySelector("#usernameLogin").value;
        let pswrd = document.querySelector("#passwordLogin").value;
        let userObject = {username: name, password: pswrd};
        loginFetch(userObject); // This is where the app flows next. When the login submit button is hit, it goes to loginFetch
        login.remove() // which is in the Fetch Directory.
        signup.remove()
      })
    }
}