const buttons = document.querySelectorAll(".accordion-switch");
let countActive = 0;

const switchAccordion = (el) => {
  el.parentNode.classList.toggle("active");
  el.parentNode.nextElementSibling.classList.toggle("active");
};

const closeAccordion = (el) => {
  el.parentNode.classList.remove("active");
  el.parentNode.nextElementSibling.classList.remove("active");
  el.dataset.open = "false";
};

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.dataset.open == "true") {
      switchAccordion(button);
      button.dataset.open = "false";
      countActive = 0;
    } else {
      if (countActive) {
        buttons.forEach((item) => {
          if (item.dataset.open == "true") {
            closeAccordion(item);
          }
        });
      }
      switchAccordion(button);
      button.dataset.open = "true";
      countActive = 1;
    }
  };
});
