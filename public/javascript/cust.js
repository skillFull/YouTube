const table = document.getElementById('table');
const createVideo = document.getElementById('createVideo');
const attachmentYoutube = document.getElementById('attachmentYoutube');
const notification = document.getElementById('notification');
const form = document.getElementById('search');



function render(arr) {
    let urlImages = arr.map((obj) => {
        return `<div class="blockImages">
          <img src ="${obj.download_url}">
          <div class ="author">${obj.author}</div>
        </div>`
    });
    let blockImages = urlImages.join("");
    return table.innerHTML = `${blockImages}`;
}

class Menu {
  handleEvent(event) {
    switch (event.type) {
      case 'mousedown':
        createVideo.style.backgroundColor = 'rgb(96, 96, 96)'
        break;
      case 'mouseup':
        createVideo.style.backgroundColor = 'inherit'
        break;
    }
  }
}

let menu = new Menu();
createVideo.addEventListener('mousedown', menu)
createVideo.addEventListener('mouseup', menu)


async function data(url) {
  let readUrl = new URL(url);
  await fetch(`${readUrl.pathname}`)
    .then(res => res.json())
    .then(result => render(result))
}

data(document.URL + 'data')

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let res = await fetch ('http://localhost:5000/results', {
    method: 'POST',
    body: new FormData(search)
  })
  let req = await res.json();
  render(req)
})
