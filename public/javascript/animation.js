const createVideo = document.getElementById('createVideo');
const attachmentYoutube = document.getElementById('attachmentYoutube');
const notification = document.getElementById('notification');



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
  
  