class Signup {
    constructor(){

      this.section = document.createElement("section");
      this.section.id="SignUp";
      this.section.innerHTML = `
        <form id='signupForm' action='http://localhost:3000/users' method='POST'>
          <h2>Sign up</h2>
          <input id='username' type='text' name='user[username]' placeholder='Username'/><br/>
          <input id='password' type='password' name='user[password]' placeholder='Password'/><br/>
          <input type='submit' name='submit' value='Submit'/>
        </form>
        `;

      document.body.appendChild(this.section);

      this.loginLinkContainer = document.createElement("section");
      this.loginLinkContainer.id = 'loginDiv'
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
        const loginLinker = document.getElementById("loginDiv")
  
        loginButton.addEventListener("click", () => {
            new Login
            signupForm.remove()
            signup.remove()
            loginLinker.remove()
        })
    }
}