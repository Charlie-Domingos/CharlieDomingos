const setmobile = document.getElementById('set-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

setmobile.addEventListener('click', toggleMenu)
setmobile.addEventListener('touchstart', toggleMenu)
