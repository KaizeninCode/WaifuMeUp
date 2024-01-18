const apiUrl = 'https://api.waifu.im/search';
let data; // Declare data as a global variable

// DARK-LIGHT MODE TOGGLE
const container = document.querySelector('.container');
const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'light-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const lightContainer = document.querySelector('#light-container');

toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.add('disabled');
    setTimeout(() => {
      toggle.classList.remove('disabled');
    }, 2000);
    icons.forEach(icon => {
      icon.classList.toggle('fa-moon');
    });
    container.classList.toggle('active');
    lightContainer.classList.toggle('active');
  });
});

// DOM FUNCTIONS
document.addEventListener('DOMContentLoaded', displayFirstPost);

// Fetch and display the first post
function displayFirstPost() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(responseData => {
      data = responseData; // Assign the fetched data to the global variable
      let container = document.querySelector('#nsfw-content');
      container.innerHTML = `
        <div id="nsfw-img">
          <img src="${data.source}" alt="${data.name}">
        </div>
        <div id='img-info'>
          <p id='a' onclick='likePost()'>Like</p>
          <p id='b' onclick='addToFavs()'>Save</p>
        </div>
      `;
    });
}

// Like a post
function likePost() {
  let like = document.getElementById('a');
  like.addEventListener('click', () => alert('Added to Liked Posts.'));
  // Additional logic for liking the post can be added here.
}

// Add to favorites
function addToFavs() {
  let save = document.getElementById('b');
  save.addEventListener('click', () => {
    alert('Added to Favorites');
    // Additional logic for saving to favorites can be added here.
  });
}
