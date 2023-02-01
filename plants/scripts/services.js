const NAME_CATEGORY = {
  "Garden care": "Gardens",
  Planting: "Planting",
  "Lawn care": "Lawn",
};

const servicesButtons = document.querySelectorAll(".service-button");
const serviceItems = document.querySelectorAll(".service-item");

const countPress = () => {
  return Array.from(servicesButtons).reduce(
    (count, button) =>
      button.classList.contains("active") ? count + 1 : count,
    0
  );
};

const changeClassActive = (button) => {
  button.classList.toggle("active");

  const activeButtons = Array.from(servicesButtons)
    .filter((item) => item.classList.contains("active"))
    .map((button) => (button = button.dataset.category));
  console.log(activeButtons);
  serviceItems.forEach((card) => card.classList.remove("blur"));
  if (activeButtons.length !== 0) {
    serviceItems.forEach((card) => {
      if (!activeButtons.includes(card.dataset.category)) {
        card.classList.add("blur");
      }
    });
  }
};

servicesButtons.forEach(
  (button) =>
    (button.onclick = () => {
      if (button.classList.contains("active")) {
        changeClassActive(button);
      } else if (countPress(servicesButtons) !== 2) {
        changeClassActive(button);
      }
    })
);
