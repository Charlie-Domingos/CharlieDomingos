// Mobile Toggle

const setmobile = document.getElementById('set-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

setmobile.addEventListener('click', toggleMenu)
setmobile.addEventListener('touchstart', toggleMenu)

// Dark mode

const themeToggle = document.getElementById('themeToggle')
const body = document.body

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark')
  // Salvar a preferência do usuário em localStorage ou cookies
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})

// Verificar a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    body.classList.add('dark')
  }
})

// Mostrar conteudo gradativamente


function scrollToContato() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
}

window.sr = ScrollReveal({ reset: true })

ScrollReveal().reveal('.skills', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.projects', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.container-text', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.img-about', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imggmail', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imgmaps', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imgwhats', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})