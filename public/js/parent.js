window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.onload = function() {
    if (window.location.href.includes('Parent')) {
        console.log('hide form');
        document.getElementById(`child-signup-form`).style.display = `none`;
    };
};

const newChildHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#child-name').value;
    const creditType = document.querySelector('#credit-type').value;
    const parent_id = document.querySelector('#parent.id').value;
    const username = document.querySelector('#username-signup').value;
    const password = document.querySelector('#password-signup').value;
    const hint = document.querySelector('#hint-signup').value;
    const type = "Child";
    // Send fetch request to add a new child record
    document.getElementById("child-signup-form").style.display = "none";
    document.getElementById('childAdd').style.display = "run-in";
    const user =  fetch('/api/user', {
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
        const response =  fetch(`/api/child`, {
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

const showChildForm = async (event) => {
    event.preventDefault();
    console.log(`on load of parent`);
    document.querySelector(`.child-signup-form`).scrollIntoView({ 
        behavior: 'smooth' 
    });
    document.getElementById(`childAdd`).style.display = `none`;
};

// document.onreadystatechange = (function() {
//     if (document.readyState === 'complete') {
//         var childsave = document.getElementById('childSave');
//         var childadd = document.getElementById('childadd');
//         if (childsave) {
//             childsave.addEventListener("click",newChildHandler,false);
//         }
//         if(childadd){
//             childadd.addEventListener("click",showChildForm,false);
//         };
//     }
// });
// const childsave = document.querySelector('childSave').addEventListener("submit",newChildHandler);
// $(child-Save).click(newChildHandler);
// const childadd = document.querySelector('childAdd').addEventListener("submit",showChildForm);
// $(child-Add).click(showChildForm);// 
document.querySelector('childSave').addEventListener("submit",newChildHandler);
document.querySelector('childAdd').addEventListener("submit",showChildForm);