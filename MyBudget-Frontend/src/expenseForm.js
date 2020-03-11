let form = document.getElementById("form");
let create = document.getElementById("navCreate")
form.style.display ="none"

create.addEventListener("click", function(){
    form.style.display = ""
})


// we grab the element by the submit button
// the document listens for which button is pressed
// we then send a fetch post request from what is inside of the input fields by calling getElementByID("id").value
// whatever is inside the input field will equate to the value. It will capture it.
// make the input field keys into an object
// send that object to "http://localhost:3000/budgets/1/expenses" with the object as the second argument
// then return the response
// Watch chris's video to see how this is all implemented.