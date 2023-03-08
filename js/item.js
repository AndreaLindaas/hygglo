const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://hygglo.gpio.no/api/items/item/?id=" + id;
const rentalUrl = "http://hygglo.gpio.no/api/rentals/rentalsForItem/?id=" + id;
const text = document.querySelector(".text");
const rentals = document.querySelector(".rentals");

async function getItem() {
  const response = await fetch(url);
  const result = await response.json();

  showItem(result[0]);
}

function showItem(item) {
  console.log(item);
  let info = `${item.name}`;
  text.innerHTML = info;
}

async function getRentals() {
  const response = await fetch(rentalUrl);
  const result = await response.json();

  showRentals(result);
}

function showRentals(rentalList) {
  const headerLi = `<li><span><strong>Dato</strong></span><span><strong>Pris</strong></span>`;
  rentals.innerHTML = headerLi;
  for (let i = 0; i < rentalList.length; i++) {
    let rental = `<li><span>${rentalList[i].date}</span><span>${rentalList[i].rentalPrice}</span></li>`;
    rentals.innerHTML += rental;
  }
}

getItem();
getRentals();
