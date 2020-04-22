class LoginWillUnmount {

    constructor(){
        this.loginForm = document.getElementById("LogIn");
        document.removeChild(this.loginForm)
    }

}