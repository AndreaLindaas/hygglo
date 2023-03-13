const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://hygglo.gpio.no/api/items/item/?id=" + id;
const rentalUrl = "http://hygglo.gpio.no/api/rentals/rentalsForItem/?id=" + id;
const title = document.querySelector(".title");
const rentals = document.querySelector(".rentals");
const image = document.querySelector(".item-image");
const itemPriceHtml = document.querySelector(".item-price");
const urlTing = document.querySelector(".url-ting");

async function getItem() {
  const response = await fetch(url);
  const result = await response.json();

  showItem(result[0]);
}

function showItem(item) {
  console.log(item);

  title.innerHTML = `${item.name}`;
  image.src = `images/${item.image}`;
  itemPriceHtml.innerHTML = `Du kjøpte ${item.name} for ${item.itemPrice} ,-`;
  urlTing.innerHTML = `Se annonse på <a href="${item.url}">Hygglo</a>`;
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
    let rental = `<li><span>${rentalList[i].date}</span><span>${rentalList[i].rentalPrice},-</span><i class="fa-solid fa-xmark"></i><span></span></li>`;
    rentals.innerHTML += rental;
  }
}

getItem();
getRentals();
