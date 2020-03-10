class Expense {

    static all = []

    constructor({id, name, cost, date, budgetId}){
        this.id = id
        this.name = name
        this.cost = cost
        this.date = date
        this.budgetId = budgetId

        Expense.all.push(this)
    }

    get total(){
    //    let aggregate = Expense.all.reduce(a, b => a + b)
    //    return aggregate
    }
}