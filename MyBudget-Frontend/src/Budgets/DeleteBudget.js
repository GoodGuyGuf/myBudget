function deleteBudget(id){
    console.log(`This is the delete button argument: ${id}`)
    let fetchObject = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(id)
    }

    const fetcher = async() => {
        const response = await fetch(`http://localhost:3000/budgets/${id}`, fetchObject)
        const json = await response.json()
        console.log(json)
        if (json.message === "Failed to Delete"){
            console.log(json)
        } else if (json.message === "Successful Deletion."){
            document.getElementById(`budget${id}`).remove()
            const budgetCountUpdater = document.getElementById("budgetCount");
            budgetCountUpdater.innerHTML = `Number of Budgets: ${json.budgets_count}`
        }
    }
    fetcher()
}