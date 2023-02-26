const url = "http://hygglo.gpio.no/api/items/";
const items = document.querySelector(".items");

async function getTools() {
  const response = await fetch(url);
  const result = await response.json();
  showTools(result);
}

function showTools(tools) {
  for (let i = 0; i < tools.length; i++) {
    console.log(tools[i].name);

    let tool = `<li><span><a href="item.html?id=${tools[i].id}">${
      tools[i].name
    }</a></span><span>${tools[i].itemPrice},-</span><span>${
      tools[i].income ? tools[i].income : "0"
    },-</span></li>`;
    items.innerHTML += tool;
  }
}

getTools();
