const loginFormHandler = async (event) => {

        event.preventDefault();
    
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
    
        if (username && password) {
            fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(function (response) {
                return response.json();
            })
            .then(data => {    
                console.log('returned data',data);
                document.location.replace(`/${data ['user']['user']['usertype']}/${data ['user']['id']}`)});
        } else {
            alert('Missing username or password');
        }
    };

    
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);



