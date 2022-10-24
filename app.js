// UI Elements
const menuIcon = document.querySelector('.mobile-menu-icon');
const closeIcon = document.querySelector('.close-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const menuList = document.querySelector('.menu-list');

// Load Event Listener
menuIcon.addEventListener('click', handleOpenMenu);
closeIcon.addEventListener('click', handleCloseMenu);

// UI Handlers
function handleOpenMenu(e) {
  // console.log(e)
  mobileNav.style.display = 'block';
}

function handleCloseMenu(e) {
  mobileNav.style.display = 'none';
}