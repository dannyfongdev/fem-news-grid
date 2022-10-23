// UI Elements
const menuIcon = document.querySelector ('.mobile-menu-icon');
const closeIcon = document.querySelector ('.close-menu-icon');
const mobileMenu = document.querySelector('.mobile-nav');
const menuList = document.querySelector('.menu-list');

// Load Event Listener
menuIcon.addEventListener ('click', handleClickMenu);
closeIcon.addEventListener ('click', handleClickCloseMenu);

// UI Handlers
function handleClickMenu(e) {
  closeIcon.style.display = 'block';
  closeIcon.style.zIndex = 10;
  menuIcon.style.display = "none";
  showMobileMenu();
}

function handleClickCloseMenu(e) {
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  closeMobileMenu();
}

function showMobileMenu() {
  mobileMenu.style.transition = '1s';
  mobileMenu.style.display = 'block'
  mobileMenu.style.width = '100%';
  mobileMenu.style.height = '100%';
  mobileMenu.style.zIndex = 9;
  mobileMenu.style.transition = '1s';
  menuList.style.display = 'block';
  menuList.style.width = '70%';
  menuList.style.height = '100%';
  
}

function closeMobileMenu() {
  mobileMenu.style.transition = '1s';
  mobileMenu.style.display = 'none'
  mobileMenu.style.width = '0%';
  mobileMenu.style.transition = '1s';
  menuList.style.display = 'none';
  menuList.style.width = '0%';}