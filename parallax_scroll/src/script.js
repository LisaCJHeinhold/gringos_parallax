let sun = document.getElementById('sun')
let title = document.getElementById('title')

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  title.style.top = value * 0.75 + 'px';
  sun.style.top = value * 0.25 + 'px';
});