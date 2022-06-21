// Add your code here
const submitData = (name, email) => {

    const handleMyData = (data) => {
        const h2 = document.createElement('h2')
        const body = document.querySelector('body')
        h2.textContent = data
        body.appendChild(h2)
    }

    const handleMyErrors = (error) => {
        const p = document.createElement('p')
        const body = document.querySelector('body')
        p.textContent = error
        body.appendChild(p)
    }
    
    const userData = {
        name: name,
        email: email
    }
    const objectConfig = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(userData)
    }
    return fetch('http://localhost:3000/users', objectConfig)
    .then(response => response.json())
    .then(receivedData => handleMyData(receivedData.id))
    .catch(e => handleMyErrors(e.message))
}

document.addEventListener('DOMContentLoaded', () => submitData("davui", 'dave@gmail.com'))