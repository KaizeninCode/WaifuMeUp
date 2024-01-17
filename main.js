document.addEventListener('DOMContentLoaded', displayFirstPost)

const apiUrl = 'https://api.waifu.im/search';

async function displayFirstPost() {
    const response = await fetch(apiUrl)
    const data = response.json()    
    let container = document.querySelector('#nsfw-content')
    container.innerHTML = `
    <div id="nsfw-img">
        <img src = ${data.url} alt='${data.image_id}'>
    </div>
    <div id='img-info'>
        <p id = 'a' onclick='likePost()'>Like</p>
        <p id = 'b' onclick='addToFavs()'>Save</p>            
    </div>
    `    
}


function likePost(){
    let like = document.getElementById('a')
    like.addEventListener('click', () => alert('Added to Liked Posts.'))
}

function addToFavs(){
    let save = document.getElementById('b')
    save.addEventListener('click', () => {
        alert('Added to Favorites.')
        fetch('https://api.waifu.im/fav/toggle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({image_id: data.id})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
}