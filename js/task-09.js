function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  changeColor: document.querySelector(".change-color"),
};
elements.changeColor.addEventListener("click", handlerClick);

function handlerClick() {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.color.textContent = getRandomHexColor();
}
