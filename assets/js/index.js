let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
})