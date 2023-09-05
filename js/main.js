let big = document.getElementById("big");
let item_1 = document.getElementById("item-1");
let item_2 = document.getElementById("item-2");
let item_3 = document.getElementById("item-3");

item_1.onclick = active;
item_2.onclick = active;
item_3.onclick = active;

item_1.addEventListener("click", changeInfo);
item_2.addEventListener("click", changeInfo);
item_3.addEventListener("click", changeInfo);

function active() {
  item_1.classList.remove("active");
  item_2.classList.remove("active");
  item_2.classList.remove("active");
  this.classList.toggle("active");
}
function changeInfo() {
  let src = this.firstElementChild.firstElementChild.src;
  let text = this.lastElementChild.innerText;

  big.style.backgroundImage = `url(${src})`;
  big.firstElementChild.innerText = text;
}
