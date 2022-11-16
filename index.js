const setmobile = document.getElementById('set-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

setmobile.addEventListener('click', toggleMenu)
setmobile.addEventListener('touchstart', toggleMenu)

const slider = tns({
  container: '.partSkills',
  loop: true,
  controls: false,
  controlsPosition: 'bottom', // move o posicionamento dos botões
  navPosition: 'bottom', 
  mouseDrag: true, //habilita para puxar com o mouse
  responsive: {
    0 : {
      items: 1, // seta a quantidade de icones na tela responsivo
    },
    320: {
      items : 2,
    },
    450: {
      items : 3,
    },
    768: {
      items : 4,
    }
  }

})