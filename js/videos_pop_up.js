const btn = document.querySelector('.bouton');
const videoContainer =  document.querySelector('.video-container');
const close =  document.querySelector('.close');

      btn.addEventListener('click',()=>{
          videoContainer.classList.toggle('active');
      })

      close.addEventListener('click',()=>{
          videoContainer.classList.remove('show');
      })