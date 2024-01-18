//DARK-LIGHT MODE TOGGLE
const container = document.querySelector('.container')
const cloneContainer = container.cloneNode(true)
cloneContainer.id = 'light-container'
document.body.appendChild(cloneContainer)
cloneContainer.classList.remove('active')

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i')
const lightContainer = document.querySelector('#light-container')

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {    
        toggle.classList.add('disabled')
        setTimeout(() => {
            toggle.classList.remove('disabled')
        }, 2000)
        icons.forEach(icon => {
        icon.classList.toggle('fa-moon');
        })
        container.classList.toggle('active')
        lightContainer.classList.toggle('active')
    })
    })
    



//DOM FUNCTIONS
document.addEventListener('DOMContentLoaded', displayFirstPost)

// https://api.waifu.im/fav/toggle
// http://localhost:3000/waifus/20
// http://localhost:3000/saved-posts
// http://localhost:3000/favorites


const apiUrl = 'https://api.waifu.im/search';
 function displayFirstPost() {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        let container = document.querySelector('#nsfw-content')
        container.innerHTML = `
        <div id="nsfw-img">
            <img src = ${data.source} alt=${data.name}>
        </div>
        <div id='img-info'>
            <p id = 'a' onclick='likePost()'>Like</p>
            <p id = 'b' onclick='addToFavs()'>Save</p>            
        </div>
        `    
    })    
}




function likePost(){
    let like = document.getElementById('a')
    like.addEventListener('click', () => alert('Added to Liked Posts.'))
    // like.addEventListener('click', () => {
    //     alert('Added to Liked Posts')
    //     fetch('', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: data.name,
    //             imageUrl: data.imageUrl
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // })
}

function addToFavs(){
    let save = document.getElementById('b')
    save.addEventListener('click', () => {
        alert('Added to Favorites')
        fetch('https://api.waifu.im/fav/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                imageUrl: data.imageUrl
            })
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