document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this); // Обратите внимание на правильное написание FormData
    console.log(formData);

    const data = {
        username: formData.get('fname'), // formData.get - функция, принимающ в кач-ве параметра название поля, возвращ значение, введенное пользователем
        password: formData.get('lname')
    };
    console.log(data)
   
    const errorRed = document.getElementById('error')

    fetch("http://84.201.158.229:5000/auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Используем данные из формы
    })
    .then(response => response.json())
    .then(function(data) {
        
        if (data.status === 'ok') {
           window.location.href = '/';

        } else {
            
           errorRed.textContent=data.description;
        }
    })
    
});



