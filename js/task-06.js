const input = document.getElementById("validation-input");
const expectedLength = Number(input.dataset.length);
// const expectedLength = parseInt(input.getAttribute('data-length'));
input.addEventListener("blur", handlerInput);
function handlerInput() {
  const currentLength = input.value.trim().length;
  if (currentLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (currentLength !== expectedLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
