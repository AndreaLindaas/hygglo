const url = "http://hygglo.gpio.no/api/items/";
const items = document.querySelector(".items");

async function getTools() {
  const response = await fetch(url);
  const result = await response.json();
  showTools(result);
}

function showTools(tools) {
  const headerLi = `<li><span><strong>Ting</strong></span><span><strong>Pris</strong></span><span><strong>Inntjening</strong></span></li>`;
  items.innerHTML = headerLi;
  for (let i = 0; i < tools.length; i++) {
    let tool = `<li><span><a href="item.html?id=${tools[i].id}">${
      tools[i].name
    }</a></span><span>${tools[i].itemPrice},-</span><span>${
      tools[i].income ? tools[i].income : "0"
    },-</span></li>`;
    items.innerHTML += tool;
  }
}

getTools();
