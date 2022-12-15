let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
})

let tabsBtn = document.querySelectorAll('.tabs-btn');
let actives = document.getElementsByClassName('active');
for (i = 0; tabsBtn.length > i; i++) {
  tabsBtn[i].onclick = function () {
    let currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("active");

    if (currentActive !== this)
      this.classList.add("active");
  };
}