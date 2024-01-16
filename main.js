
function testAPI() {
    const apiUrl = 'https://api.waifu.im/search';
    const headers = new Headers();
    headers.append('Accept-Version', 'v5');
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log("Data: ", data);
    })
}