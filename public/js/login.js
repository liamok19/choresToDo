const loginFormHandler = async (event) => {

        event.preventDefault();
    
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
    
        if (username && password) {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                console.log(response);
                if (user.type === "Parent"){
                    await fetch('api/parent/user/{$user_id}', {   ///check method here
                        method: 'GET',
                        params: res.user_id,
                        headers: { 'Content-Type': 'application/json' },
                    });
                    if (response.ok) {
                        await fetch('api/chores/parent/{$id}',{
                            method: 'GET',
                            params: res.id,
                            headers: { 'Content-Type': 'application/json' },
                        });
                        if (response.ok) {
                            document.location.replace('/');  // send parent page?
                        } else {
                            alert('Error in system - retrieving chore data for parent');
                        }
                    } else {
                        alert('Error in system - retrieving parent ID');   
                    }
                } else {
                    await fetch('api/child/user/{$user_id}', {   ///check method here
                        method: 'GET',
                        params: res.user_id,
                        headers: { 'Content-Type': 'application/json' },
                    });
                    if (response.ok) {
                        await fetch('api/chores/child/{$id}',{
                            method: 'GET',
                            params: res.id,
                            headers: { 'Content-Type': 'application/json' },
                        });
                        if (response.ok) {
                            document.location.replace('/');  // send child page?
                        } else {
                            alert('Error in system - retrieving chore data for child');
                        }
                    } else {
                        alert('Error in system - retrieving chore child ID');   
                    }
                }
            } else {
                alert('Failed to log in.');
            }
        } else {
            alert('Missing username or password');
        }
    };
    