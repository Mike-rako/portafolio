let isTicking = false;

window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector('header');
      header.classList.toggle('fijo', window.scrollY > 50);
      isTicking = false;
    });
    isTicking = true;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menu.addEventListener('click',()=>{
  menu.classList.remove('show')
})
