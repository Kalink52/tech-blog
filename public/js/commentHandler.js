console.log('test')

const newBlogbtn = document.getElementById('newBlogbtn')
const postClass = document.getElementsByClassName("postid")
const post_id = postClass[0].id
async function newCommentHandler(event) {
    event.preventDefault()
    console.log('wake')
    // const user_id = document.getElementById('user_id').value;

    const body = document.getElementById('body')

    console.log({
        body: body.value,
        post_id
    })

    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
            // user_id, // gets from post session id
            body: body.value,
            post_id
        }),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace(`/dashboard/${post_id}`);
    } else {
        alert('Failed to add post')
    }
}

newBlogbtn.addEventListener('click', newCommentHandler)