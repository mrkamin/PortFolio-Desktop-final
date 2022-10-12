const closeMenuBtn = document.getElementById('close-menu-btn');
const navBar = document.getElementById('mobile_navbar');
const toggleBtn = document.getElementById('toggle');
let mobNavItems = document.getElementsByClassName('mob-nav-item');
mobNavItems = Array.prototype.slice.call(mobNavItems);

toggleBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(0)';
});

closeMenuBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(-100%)';
});

mobNavItems.forEach((mobNavItem) => {
  mobNavItem.addEventListener('click', () => {
    navBar.style.transform = 'translateX(-100%)';
  });
});
