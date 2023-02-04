const DATA = [
  {
    city: "Yonkers, NY",
    phone: "+1 914 678 0003",
    address: "511 Warburton Ave",
  },
  {
    city: "Canandaigua, NY",
    phone: "+1 585 393 0001",
    address: "5151 Charlotte Street",
  },
  {
    city: "Sherrill, NY",
    phone: "+1 315 908 0004",
    address: "14 WEST Noyes BLVD",
  },
  {
    city: "New York City",
    phone: "+1 212 456 0002",
    address: "9 East 91st Street",
  },
];

const select = document.getElementById("select");
const headerSelect = document.getElementById("select-header");
const selectValue = document.getElementById("select-tittle");
const bodySelect = document.getElementById("select-body");
const cityInfo = document.getElementById("city-info");

const fullCityInfo = (cityName) => {
  cityInfo.classList.add("active");

  let newCity = DATA.find((el) => el.city == cityName);

  const city = document.getElementById("city");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const call = document.getElementById("call");

  city.innerHTML = newCity.city;
  phone.innerHTML = newCity.phone;
  address.innerHTML = newCity.address;

  let hrefCall = "tel:" + newCity.phone.replace(/\s/g, "");
  call.setAttribute("href", hrefCall);
};

headerSelect.onclick = () => {
  headerSelect.parentElement.classList.toggle("active");
};

bodySelect.onclick = (event) => {
  selectValue.innerHTML = event.target.innerText;
  select.classList.toggle("active");
  fullCityInfo(event.target.innerText.trim());
};
