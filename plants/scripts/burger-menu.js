const body = document.body;
const burgerButton = document.getElementById("burger");
const menu = document.getElementById("nav-list");
const overlay = document.getElementById("overlay");
const links = menu.querySelectorAll("li");

const toggleMenu = () => {
  body.classList.toggle("open-menu");
  burgerButton.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
};
burgerButton.onclick = toggleMenu;
overlay.onclick = toggleMenu;
links.forEach((link) => {
  link.onclick = () => {
    if (menu.classList.contains("open")) {
      toggleMenu();
    }
  };
});
