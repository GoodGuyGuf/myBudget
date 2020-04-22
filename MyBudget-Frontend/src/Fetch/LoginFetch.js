function loginFetch(userObject){

    let fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(userObject)
    }
    
    fetch('http://localhost:3000/login', fetchObject)
        .then(resp => resp.json())
        .then(function(json){
             if (json.message === "No User Found."){
                 new LoginError
             } else {
                let userObj = {id: json.data.id, username: json.data.attributes.username}
                // new User (userObj)
                console.log(userObj)
             }
        })
        .catch(function(error) {
            alert("Something has gone wrong.");
            console.log(error.message);
        });
    }