const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://hygglo.gpio.no/api/items/item/?id=" + id;
const rentalUrl = "http://hygglo.gpio.no/api/rentals/rentalsForItem/?id=" + id;
const text = document.querySelector(".text");
const dates = document.querySelector(".dates");

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

function showRentals(rentals) {
  for (let i = 0; i < rentals.length; i++) {
    let theDates = `<li><span>${rentals[i].date}</span><span>${rentals[i].rentalPrice}</span></li>`;
    dates.innerHTML += theDates;
  }
}

getItem();
getRentals();
