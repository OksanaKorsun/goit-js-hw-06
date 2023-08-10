function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  quantity: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

elements.createBtn.addEventListener("click", createBoxes);
elements.destroyBtn.addEventListener("click", destroyBoxes);

let size = 20;
function createBoxes(amount) {
  // amount = elements.quantity.valueAsNumber;
  amount = Number(elements.quantity.value);
  const colors = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    // elements.boxes.appendChild(box);
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    colors.push(box);
  }
  elements.quantity.value = 0;
  elements.boxes.append(...colors);
}

function destroyBoxes() {
  elements.boxes.innerHTML = "";
  size = 20;
  elements.quantity.value = 0;
}
