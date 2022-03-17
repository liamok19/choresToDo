//check all has values - these must match the handlebars
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
        
            console.log('response from user api ok',user.id);
            let user_id = data ['id'];
            const response = fetch(`/api/parent`, {
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
                alert('You are registered pleaselogin to begin');
                document.location.replace('/');
                } else {
                alert('Failed to add parent');
                }
            })
        
    });
};
document.querySelector('.signup-form').addEventListener('submit', newParentHandler);