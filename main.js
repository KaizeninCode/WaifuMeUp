
document.addEventListener('DOMContentLoaded', displayFirstPost)

const apiUrl = 'https://api.waifu.im';
const headers = new Headers();
headers.append('Accept-Version', 'v5');


function displayFirstPost() {
    fetch(`${apiUrl}/search`)
    .then(res => res.json())
    .then(images => {
        let container = document.querySelector('#nsfw-content')
        container.innerHTML = `
        <div id="nsfw-img">
            <img src = ${images.source} alt = '${images.description}'>
        </div>
        <div id='img-info'>
            <p>${images.description}</p>
            <p id = '2'>Like</p>
            <p id = '3'>Save</p>            
        </div>
        <fieldset>
            <legend>Select a category:</legend>
            <div id='sfw-cont'>
                <input type="radio" id="sfw-radio" name="SFW" value="SFW" checked />
                <label for="SFW">SFW</label>
            </div>
            <div id=''nsfw-cont>
                <input type="radio" id="nsfw-radio" name="NSFW" value="NSFW" />
                <label for="NSFW">NSFW</label>
            </div>
            <div id='fieldset-btn'>
                <button type="submit">Submit</button>
            </div>
        </fieldset>
        `
    })
}