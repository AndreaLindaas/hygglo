const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-items");

menuButton.onclick = function () {
  console.log("hei");
  menuItems.classList.toggle("show");
};
