console.log('test')

const newBlogbtn = document.getElementById('newBlogbtn')
const editBlogbtn = document.getElementsByClassName('editBlogbtn')
const deletebtn = document.getElementsByClassName('deletebtn')

async function newPostHandler(event) {
    event.preventDefault()
    // console.log('newpost')
    // const user_id = document.getElementById('user_id').value;
    const title = document.getElementById('newBlogTitle')
    // .value;
    
    const body = document.getElementById('newBlogBody')
    // .value;

    // console.log({
    //     // user_id,
    //     title: title.value,
    //     body: body.value,
    // })

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

async function editPostHandler(event) {
    event.preventDefault()
    console.log('editpost')
    console.log(event)
    const id = event.target.offsetParent.id
    console.log(id)
    const title = document.getElementById('editBlogTitle')
    const body = document.getElementById('editBlogBody')

    console.log({
        id,
        title: title.value,
        body: body.value,
    })

    const response = await fetch(`/api/posts`, {
        method: 'PUT',
        body: JSON.stringify({
            // user_id, // gets from post session id
            title: title.value,
            body: body.value,
            id: id
        },
    ),
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

async function deletePostHandler(event) {
    event.preventDefault()
    console.log('deletepost')
    console.log(event)
    const idClass = event.target.classList
    const idarr = idClass[2].split('_')
    const id = idarr[1]

    const response = await fetch(`/api/posts`, {
        method: 'DELETE',
        body: JSON.stringify({
            id
        },
    ),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete')
    }
}
newBlogbtn.addEventListener('click', newPostHandler)

for( let i = 0; i < editBlogbtn.length; i++){
editBlogbtn[i].addEventListener('click', editPostHandler)
}
for( let i = 0; i < deletebtn.length; i++){
    deletebtn[i].addEventListener('click', deletePostHandler)
    }