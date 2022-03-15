//check all has values - these must match the handlebars
async function newChoreHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const status = document.querySelector('#status:checked') ? true : false;
    const numberofCredits = document.querySelector('#numberofcredits').value;
    const parent_id = document.querySelector('#parent_id').value;
    const child_id = document.querySelector('#child_id').value;
    // Send fetch request to add a new chore
    const response = await fetch(`/api/chores`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        status,
        numberofCredits,
        parent_id,
        child_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the chore is added, the page will be reloaded
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add chore');
    }
  }
  
  document.querySelector('.classnameforaddingchorefromLiam').addEventListener('submit', newChoreHandler);
