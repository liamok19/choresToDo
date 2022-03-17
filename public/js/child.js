//check all has values - these must match the handlebars
function newChildHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#child-name').value;
    const creditType = document.querySelector('#credit-type').value;
    const parent_id = document.querySelector('#parent.id').value;
    const username = document.querySelector('#username-signup').value;
    const password = document.querySelector('#password-signup').value;
    const hint = document.querySelector('#hint-signup').value;
    const type = "Child";
    // Send fetch request to add a new child record
 
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
        let TotalCredits = 0;
        const response = await fetch(`/api/child`, {
            method: 'POST',
            body: JSON.stringify({
              name,
              TotalCredits,
              creditType,
              parent_id,
              user_id,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
        });
        //if the child  is added, the page will be reloaded
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to add child');
        }
    }
};
document.querySelector('.signup-form').addEventListener('submit', newChildHandler);