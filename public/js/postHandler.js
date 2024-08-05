console.log('test')

const newBlogbtn = document.getElementById('newBlogbtn')


async function newPostHandler(event) {
    event.preventDefault()
    console.log('wake')
    // const user_id = document.getElementById('user_id').value;
    const title = document.getElementById('title')
    // .value;
    
    const body = document.getElementById('body')
    // .value;

    console.log({
        // user_id,
        title: title.value,
        body: body.value,
    })

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            // user_id, // gets from post session id
            title: title.value,
            body: body.value,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add post')
    }
}

newBlogbtn.addEventListener('click', newPostHandler)