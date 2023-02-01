const servicesButtons = Array.from(
  document.querySelectorAll(".service-button")
);
const serviceItems = Array.from(document.querySelectorAll(".service-item"));

const countPress = () => {
  return servicesButtons.reduce(
    (count, button) =>
      button.classList.contains("active") ? count + 1 : count,
    0
  );
};

const changeClassActive = (button) => {
  button.classList.toggle("active");
  const activeButtons = servicesButtons
    .filter((button) => button.classList.contains("active"))
    .map((button) => (button = button.dataset.category));
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
      if (countPress() !== 2 || button.classList.contains("active"))
        changeClassActive(button);
    })
);
