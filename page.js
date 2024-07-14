// Get the navigation menu element
const navMenu = document.querySelector('.nav-menu');

// Add event listener for scroll event
window.addEventListener('scroll', () => {
  // Check if the user has scrolled down
  if (window.scrollY > 200) {
    navMenu.classList.add('scrolled');
  } else {
    navMenu.classList.remove('scrolled');
  }
});

// Add event listener for hover effect
navMenu.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A') {
    e.target.parentNode.classList.add('hovered');
  }
});

navMenu.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'A') {
    e.target.parentNode.classList.remove('hovered');
  }
});