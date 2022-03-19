//const btnFinished = document.querySelector('#finished');

const clickbtn = async (event) => {
    event.preventDefault();

    const idChore = await event.target.getAttribute('data-id');
    const idChild = await event.target.getAttribute('data-childid');
    const idParent = await event.target.getAttribute('data-parentid');
    // TODO: CALL THE DAMN API! 

    const response = await fetch('/api/chores/' + idChore, {
        method:'PATCH', 
        body: JSON.stringify({
            idChore, 
            idChild,
            idParent,
            fields: {
                status: true
            }
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200 ) {
        document.getElementById('finished-' + idChore).innerHTML = 'checked'
    } else {
        alert(response.statusText); 
    } 
    // document.getElementById('finished-' + id).innerHTML = 'checked'
    // console.log(id);
    // console.log('button click');

    //btnFinished.style.backgroundColor='#6a0dad'
};
// console.log(btnFinished);

document.querySelectorAll('.btn-finish').forEach((el) => {
    el.addEventListener('click', clickbtn)
})

// btnFinished.addEventListener('click', clickbtn);

// const btnFinished = Handlebars.compile(document.getElementById('#finished').innerHTML);
// // const btnFinished = document.querySelector('#finished');
// console.log('button click');

// btnFinished.addEventListener('click', () => btnFinished.style.backgroundColor='#6a0dad ')