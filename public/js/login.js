window.onload = function() {
    document.getElementById('signup-form').style.display = `none`;
    console.log('this is working', this);
    };

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
                document.location.replace(`/${data ['user']['user']['usertype']}/${data ['user']['id']}`)});
        } else {
            alert('Missing username or password');
        }
    };

    async function newParentHandler(event) {
        event.preventDefault();
        const name = document.querySelector('#name-signup').value;
        const email = document.querySelector('#email-signup').value;
        const chart = document.querySelector('#chartname-signup').value;
        const username = document.querySelector('#username-signup').value;
        const password = document.querySelector('#password-signup').value;
        const hint = document.querySelector('#hint-signup').value;
        const usertype = "Parent";
        // Send fetch request to add a new parent
        
        const user = fetch('/api/user/user/', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                usertype,
                hint,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(data => {    
                let user_id = data ['id'];
                fetch(`/api/parent`, {
                    method: 'POST',
                    body: JSON.stringify({
                    name,
                    email,
                    chart,
                    user_id,
                    }),
                    headers: {
                    'Content-Type': 'application/json',
                    },
                })
                .then(function(response) {
                    if (response.ok) {
                    console.log('response from parent api ok',user.id);
                    alert('You are registered please login to begin');
                    document.location.replace('/');
                    } else {
                    alert('Failed to add parent');
                    }
                })
            
        });
    };
    
    const showSignUpForm = async (event) => {
        event.preventDefault();
        document.getElementById('signup-form').style.display = null;
        document.getElementById("#signup").style.display = "none";
    };
document
.querySelector(".login-form")
.addEventListener("submit", loginFormHandler);
document
.querySelector("#save")
.addEventListener("click", newParentHandler);  
document
.querySelector("#signup")
.addEventListener("click", showSignUpForm); 
