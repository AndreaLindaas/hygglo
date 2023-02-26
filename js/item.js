const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://hygglo.gpio.no/api/items/item/?id=" + id;
const rentalUrl = "http://hygglo.gpio.no/api/rentals/rentalsForItem/?id=" + id;

async function getItem() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}

async function getRentals() {
  const response = await fetch(rentalUrl);
  const result = await response.json();
  console.log(result);
}
getItem();
getRentals();
