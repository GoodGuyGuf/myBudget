function createExpenseForm(id){
    let formDiv = document.createElement("div")
    formDiv.id = "expenseForm"
    formDiv.innerHTML = `<div id="form">
    <form action="http://localhost:3000/budgets" method="POST">
        <label>Name: </label>
        <input id="name${id}" type="text" name="expense[name]" placeholder="Name">
        <label>Cost: </label>
        <input id="cost${id}" type="number" name="expense[cost]" placeholder="Cost">
        <label>Date: </label>
        <input id="date${id}" type="text" name="expense[date]" placeholder="Date">
        <input type="hidden" name="expense[budget_id]" value="${id}">
      <button id='submit' type='button'>Submit</button>
    </form>
  </div>`
  document.body.appendChild(formDiv)
}


// we grab the element by the submit button
// the document listens for which button is pressed
// we then send a fetch post request from what is inside of the input fields by calling getElementByID("id").value
// whatever is inside the input field will equate to the value. It will capture it.
// make the input field keys into an object
// send that object to "http://localhost:3000/budgets/1/expenses" with the object as the second argument
// then return the response
// Watch chris's video to see how this is all implemented.