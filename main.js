function testAPI(){
    fetch('https://waifu.pics/type/category')
    .then(res => res.json())
    .then(data => {
        console.log("Data: ", data);
    })
}
testAPI()