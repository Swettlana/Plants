console.log(`1. Вёрстка соответствует макету при ширине экрана 768px +24
2. Вёрстка соответствует макету при ширине экрана 380px +24
3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. 
Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
4. На ширине экрана 430рх и меньше реализовано адаптивное меню +22 `);

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
