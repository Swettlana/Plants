const buttons = document.querySelectorAll(".accordion-switch");
buttons.forEach((button) => {
  button.onclick = () => {
    button.parentNode.classList.toggle("active");
    button.parentNode.nextElementSibling.classList.toggle("active");
  };
});
