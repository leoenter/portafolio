const iconmenu = document.querySelector('.humicon');
const menu = document.querySelector('.navbar')

iconmenu.addEventListener('click',togglemenu)
function togglemenu() {
  menu.classList.toggle('shownav')
} 