
let currentURL = window.location.href;
console.log("The current URL is: " + currentURL);

const getItemLocal = () => {
    return localStorage.getItem('shortUrl')
}


const getData = getItemLocal();
items = JSON.parse(getData);

console.log('items is ', items);

const res = items.find(item => item.shortUrl === currentURL)
/*const res = items.find(item => {
item.shortUrl === currentURL
}

)*/
console.log('res is', res);

const longURl = res.LongUrl;
window.location = longURl;
let final
final = items.map(item => {
    if (item.shortUrl === currentURL) {
        item.counter++;
    }
    return item
})

console.log('fina is', final);


let query = JSON.stringify(final);
localStorage.setItem('shortUrl', query)










