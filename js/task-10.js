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

function createBoxes(amount) {
  amount = elements.quantity.valueAsNumber;
  const step = 10;
  for (let i = 1; i <= amount; i += 1) {
    let box = document.createElement("div");
    elements.boxes.appendChild(box);
    box.style.width = `${30 + step * i}px`;
    box.style.height = `${30 + step * i}px`;
    box.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  elements.boxes.innerHTML = "";
}
