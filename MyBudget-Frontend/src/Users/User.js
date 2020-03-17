class User {

    static currentUser = []

    constructor({id, username}){
        this.id = parseInt(id)
        this.username = username

        User.currentUser.push(this)
    }

    get budgets(){
        return Budget.all.filter(budget => budget.userId === this.id)
    }

    get expenses(){
        return Expense.all.filter(expense => expense.userId === this.id)
    }


}