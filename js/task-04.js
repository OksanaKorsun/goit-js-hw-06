const btn1 = document.querySelector('[data-action="decrement"]');
const span = document.querySelector("#value");
const btn2 = document.querySelector('[data-action="increment"]');

btn1.addEventListener("click", handlerClick);
btn2.addEventListener("click", handlerClick);
let counterValue = 0;

function handlerClick(event) {
  if (event.currentTarget === btn1) {
    counterValue -= 1;
    span.textContent = counterValue;
  }
  if (event.currentTarget === btn2) {
    counterValue += 1;
    span.textContent = counterValue;
  }
  return span.textContent;
}
