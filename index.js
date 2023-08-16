// Mobile Toggle

const setmobile = document.getElementById("set-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

setmobile.addEventListener("click", toggleMenu);
setmobile.addEventListener("touchstart", toggleMenu);

const menuOptions = document.querySelectorAll("#nav ul li a");

menuOptions.forEach((option) => {
  option.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

function scrollToContato() {
  const nav = document.getElementById("nav"); // Obtém o elemento do menu
  nav.classList.remove("active"); // Remove a classe 'active' do menu

  const contatoSection = document.getElementById("contact"); // Obtém a seção de contato
  contatoSection.scrollIntoView({ behavior: "smooth" }); // Rola até a seção de contato
}

// Dark mode

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  // Salvar a preferência do usuário em localStorage ou cookies
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Verificar a preferência do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
});

const element = document.querySelector(".container-text");
let scrolled = false;

function handleScroll() {
  if (!scrolled && window.scrollY > 100) {
    container - text.classList.add("active");
    scrolled = true;
  }
}

window.addEventListener("scroll", handleScroll);

// Obtém todos os links de âncora na página
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Função para lidar com o clique nos links de âncora
function handleAnchorClick(event) {
  event.preventDefault();

  const target = document.querySelector(this.getAttribute("href"));
  if (target) {
    // Define o valor de deslocamento desejado (em pixels) abaixo do topo do elemento
    const offset = 100;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    // Realiza o scroll suave até a posição de destino
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Adiciona o ouvinte de evento de clique a todos os links de âncora
anchorLinks.forEach((link) => {
  link.addEventListener("click", handleAnchorClick);
});

// Mostrar conteudo gradativamente

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".projects", {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0,
  },
});

ScrollReveal().reveal(".container-text", {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0,
  },
});

ScrollReveal().reveal(".imggmail", {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0,
  },
});

ScrollReveal().reveal(".imgmaps", {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0,
  },
});

ScrollReveal().reveal(".imgwhats", {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0,
  },
});
