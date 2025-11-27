const input = document.getElementById('input');
const button = document.getElementById('button');



setInterval(()=>{
showCurruntUrl();
},1000)
button.addEventListener('click', () => {
    let inputVal = input.value;

    if (inputVal === '') {
        alert('empty field not allowed here')
        return;
    }
    const urlExist = getItemLocal();
    let items;
    if (!urlExist) {
        items = [];
    } else {
        items = JSON.parse(urlExist);

        const res = items.find(item => item.LongUrl === inputVal)
        if (res) {
            alert(`already have sort url ${res.shortUrl}`)
            return;
        }

    }

    console.log('item is', items);
    let r = (Math.random() + 1).toString(36).substring(7);
    const shortUrlGen = `http://localhost:5500/details.html?id=${r}`
    const id = items.length + 1;
    obj = { id: id, LongUrl: inputVal, shortUrl: shortUrlGen, counter: 0 }
    console.log(obj);

    items.push(obj);
    const data = JSON.stringify(items);
    console.log('data is', data);

    localStorage.setItem('shortUrl', data)
    showCurruntUrl();
})

 const getItemLocal = () => {
    return localStorage.getItem('shortUrl')
}

const showCurruntUrl = () => {
    let html = ``;
    const dataExist = getItemLocal();
    if (!dataExist) {
        return;
    }

    const items = JSON.parse(dataExist);
    console.log('data is', items);

    items.forEach(item => {
        html += `  <tr>
                        <td>${item.id}</td>
                        <td>${item.LongUrl}</td>
                        <td><a target="_blank" onclick ="handleCounter(event, '${item.LongUrl}')" href= "${item.shortUrl}">${item.shortUrl} </a> </td>
                        <td>${item.counter}</td>
                     </tr>`
    })
    const head = ` <tr>
                        <th>id</th>
                        <th>long url</th>
                        <th>short url</th>
                        <th>counter</th>
                    </tr>`
    document.getElementById('head').innerHTML = head;
    document.getElementById('visualData').innerHTML = html;
}

const handleCounter = (event, LongUrl) => {
    console.log('me yaha huuuuuuu');
    console.log('event is', event.target);


}


document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.result');
  showCurruntUrl();
  container.classList.add('is-open'); 
});




