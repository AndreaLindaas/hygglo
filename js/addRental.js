const itemsHtml = document.querySelector("#items");
async function getItems() {
  const response = await fetch("http://hygglo.gpio.no/api/items/");
  const result = await response.json();
  console.log(result);
  createOptions(result);
}

function createOptions(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    let option = `<option>${items[i].name}</option>`;
    itemsHtml.innerHTML += option;
  }
}

getItems();
