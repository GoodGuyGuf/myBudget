class User {

    static all = []

    constructor({id, username}){
        this.id = parseInt(id)
        this.username = username

        User.all.push(this)
    }

    static currentUser(){
        return this.all[0]
    }

}