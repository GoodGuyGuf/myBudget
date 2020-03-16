class Budget {

    static all = []
    
    constructor({id, title, bank, user_id}){
        this.id = parseInt(id)
        this.title = title
        this.bank = bank
        this.userId = user_id

        Budget.all.push(this)
    }

    get expenses(){
        return Expense.all.filter(function(expense){
            return expense.budgetId === this.id
        }, this)
    }

}
