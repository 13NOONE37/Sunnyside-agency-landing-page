const buttonElement = document.querySelector('.hamburger');
const navElement = document.querySelector('.navigation');

document.addEventListener('click', (e) => {
  if (buttonElement.contains(e.target)) {
    navElement.classList.toggle('visible');
    return;
  }
  if (!navElement.contains(e.target)) {
    navElement.classList.remove('visible');
    return;
  }
});
