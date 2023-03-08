const baseUrl = "http://hygglo.gpio.no/api/items/item/addItem/";

const form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("hei");
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const image = document.querySelector("#image").value;
  const url = document.querySelector("#url").value;
  if (name) {
    let urlParams = `?name=${name}`;

    if (price) {
      urlParams += `&price=${price}`;
    }

    if (image) {
      urlParams += `&img=${image}`;
    }
    if (url) {
      urlParams += `&url=${url}`;
    }
    saveItem(baseUrl + urlParams);
  }
};

async function saveItem(url) {
  const response = await fetch(url);
  const result = await response.json();
  if (result.status === "ok") {
    window.location.href = "/";
  }
}
