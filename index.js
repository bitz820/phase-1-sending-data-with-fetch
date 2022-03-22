// Add your code here
function submitData(name, email) {
    
        const userData = {
            name: `${name}`,
            email: `${email}`
        }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(data => document.body.append(data.id))
        .catch(data => document.body.append(data.message))
}

// function callback (data){
//     console.log(data)
//         let p = document.createElement('p')
//     p.textContent = data.id
//     document.body.append(p)
// }

// function onError (data){
//     console.log(data)
//     let alert = document.createElement('span')
//     alert.textContent = data.message
//     document.body.append(alert)
// }
