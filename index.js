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
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  responsive: {
    1000: {
      items: 7
    },
    768: {
      items: 6
    },
    720: {
      irems: 3
    },
    480: {
      items: 3
    },
    320: {
      items: 2
    }
  }
})
