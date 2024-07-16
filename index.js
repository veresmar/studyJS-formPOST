const user = {
  "username": "veres",
  "password": "696969"
}


fetch("http://24api.ru/rest-user", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(data => console.log(data))
