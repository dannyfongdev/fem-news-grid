// UI Elements
const menuIcon = document.querySelector ('.mobile-menu-icon');
const closeIcon = document.querySelector ('.close-menu-icon');
const mobileMenu = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

// Load Event Listener
menuIcon.addEventListener ('click', handleClickMenu);
closeIcon.addEventListener ('click', handleClickCloseMenu);

// UI Handlers
function handleClickMenu(e) {
  // overlay.style.wdith = '100vw';
  // overlay.style.length = '100vh';
  // overlay.style.background = "#000";
  closeIcon.style.display = 'block';
  closeIcon.style.zIndex = 10;
  menuIcon.style.display = "none";
  showMobileMenu();
}

function handleClickCloseMenu(e) {
  closeIcon.style.display = 'none';
  menuIcon.style.display = "block";
  closeMobileMenu();
}

function showMobileMenu() {
  console.log(mobileMenu);
  mobileMenu.style.display = 'block'
  mobileMenu.style.width = '70%';
}

function closeMobileMenu() {
  // mobileMenu.style.display = "none";
  mobileMenu.style.width = '0%';
}