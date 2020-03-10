class Budget {

    static all = []
    
    constructor({id, title, bank}){
        this.id = id
        this.title = title
        this.bank = bank

        Budget.all.push(this)
    }

}