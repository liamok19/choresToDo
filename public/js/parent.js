window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.onload = function() {
    if (window.location.href.includes('Parent')) {
        console.log('hide form');
        document.querySelector(".child-signup-form").style.display = `none`;
    };
};

function newChildHandler(event) {
    event.preventDefault();
    const name = document.querySelector("#child-name").value;
    const credit_type = document.querySelector("#credit-type").value;
    const total_credits = document.querySelector("#total-credit").value;
    const parent_id = document.querySelector("#child-parent-id").value;
    const username = document.querySelector("#username-signup").value;
    const password = document.querySelector("#password-signup").value;
    const hint = document.querySelector("#hint-signup").value;
    const usertype = "Child";
    
    // Send fetch request to add a new child record
 
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
        console.log("Child id", user_id);
        console.log("Child Details", name, total_credits, credit_type,parent_id,user_id);
        const response = fetch(`/api/child`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                total_credits,
                credit_type,
                parent_id,
                user_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        //if the child  is added, the page will be reloaded
        .then(function(response) {
            if (response.ok) {
                alert('Child Record created successfully');
                document.location.reload();
            } else {
                 alert('Failed to add child');
            }
        })
    })
};

const showChildForm = async (event) => {
    event.preventDefault();
    console.log(`on load of parent`);
    document.querySelector(".child-signup-form").style.display = null;
    document.querySelector("#childAdd").style.display = "none";
};

document.querySelector("#childSave").addEventListener("click",newChildHandler);
document.querySelector("#childAdd").addEventListener("click",showChildForm);