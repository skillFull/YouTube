const table = document.getElementById('table');
const form = document.getElementById('search');



function render(arr) {
    if ( arr.length !== 0){
      let urlImages = arr.map((obj) => {
        return `<div class="blockImages">
          <img src ="${obj.download_url}">
          <div class ="author">${obj.author}</div>
        </div>`
    });
    let blockImages = urlImages.join("");
    return table.innerHTML = `${blockImages}`;
    }
      table.innerHTML = `<h1>Not files </h1>`

}

async function data(url) {
  let readUrl = new URL(url);
  await fetch(`${readUrl.pathname}`)
    .then(res => res.json())
    .then(result => render(result))
}

data(document.URL + 'data')

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch ('http://localhost:5000/results', {
    method: 'POST',
    body: new FormData(search)
  }).then(res =>  res.json())
  .then(result => render(result))
})
