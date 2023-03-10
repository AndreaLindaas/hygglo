const baseUrl = "http://hygglo.gpio.no/api/";

const itemsHtml = document.querySelector("#items");
const form = document.querySelector("form");
async function getItems() {
  const response = await fetch(baseUrl + "items/");
  const result = await response.json();

  createOptions(result);
}

function createOptions(items) {
  for (let i = 0; i < items.length; i++) {
    let option = `<option value="${items[i].id}">${items[i].name}</option>`;
    itemsHtml.innerHTML += option;
  }
}
form.onsubmit = function (event) {
  event.preventDefault();

  const price = document.querySelector("#price").value;
  const date = document.querySelector("#date").value;
  const itemId = itemsHtml.value;
  if (price && date && itemId) {
    let urlParams = `/rentals/rental/addRental/?itemId=${itemId}&date=${date}&price=${price}`;
    saveRental(urlParams);
  }
};

async function saveRental(urlParams) {
  const response = await fetch(baseUrl + urlParams);
  const result = await response.json();
  console.log(result);
}

getItems();
