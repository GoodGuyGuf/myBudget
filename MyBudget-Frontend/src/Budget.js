class Budget {

    static all = []
    
    constructor({id, title, bank, expenses}){
        this.id = id
        this.title = title
        this.bank = bank
        this.expenses = expenses

        Budget.all.push(this)
    }

}