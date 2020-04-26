class User {

    static loggedIn = {}

    constructor({id, username}){
        this.id = parseInt(id)
        this.username = username

        User.loggedIn = {...this}
    }

}