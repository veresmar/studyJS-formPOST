const user = {
  "username": "veres",
  "password": "696969"
}


fetch("http://84.201.158.229:8000/auth", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(data => console.log(data))
