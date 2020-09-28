class Signup {
    constructor(){

      this.section = document.createElement("section");
      this.section.id="SignUp";
      this.section.innerHTML = `
        <form id='signupForm' action='http://localhost:3000/users' method='POST'>
          <div class='signupFlex'>
            <h2>Sign up</h2>
          </div>

          <div class='signupFlex'>
          <label for='usernameSignup'>Username:</label>
            <input class='signupInput' id='usernameSignup' type='text' name='user[username]' placeholder='Username'>
          </div>

          <div class='signupFlex'>
            <label for='passwordSignup'>Password:</label>
            <input class='signupInput' id='passwordSignup' type='password' name='user[password]' placeholder='Password'>
          </div>

          <div class='signupFlex'>
            <input class='signupInput' type='submit' value='Submit'>
          </div>
        </form>
        `;

      document.body.appendChild(this.section);

      this.loginLinkContainer = document.createElement("section");
      this.loginLinkContainer.id = 'login'
      this.loginLinkContainer.innerHTML = `
          <h3>Already Have An Account?</h3>
          <button id='loginButton'>Log In</button>
      </section>`;

      document.body.appendChild(this.loginLinkContainer)
      this.hideSignup()
      this.handleSignUp()
    }

    handleSignUp(){
      document.querySelector("#signupForm").addEventListener("submit", event => {
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
        const loginLinker = document.getElementById("login")
  
        loginButton.addEventListener("click", () => {
            new Login
            signupForm.remove()
            signup.remove()
            loginLinker.remove()
        })
    }
}