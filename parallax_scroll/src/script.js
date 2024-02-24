// getting elements by id
let sun = document.getElementById('sun')
let title = document.getElementById('title')

// adding event listener function to window
window.addEventListener('scroll', () => {
  // set variable for scrolling
  let value = window.scrollY;
  // setting style properties for scrolling speed
  title.style.top = value * 0.75 + 'px';
  sun.style.top = value * 0.25 + 'px';
});