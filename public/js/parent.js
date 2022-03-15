//check all has values - these must match the handlebars
async function newParentHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const chart = document.querySelector('#chart').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const hint = document.querySelector('#hint').value;
    const type = "Parent";
    // Send fetch request to add a new parent
 
    const user = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            type,
            hint,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok){
        let user_id = user.id;
        const response = await fetch(`/api/parent`, {
            method: 'POST',
            body: JSON.stringify({
              name,
              description,
              chart,
              user_id,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
        });
        //if the parent is added, the page will be reloaded
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to add parent');
        }
    }
};
document.querySelector('.classnameforaddingparentfromLiam').addEventListener('submit', newChoreHandler);