const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.addEventListener("input", handlerInput);

// function handlerInput(event) {
//     if (event.currentTarget) {
//         const fontChange = input.value;

//         text.style.fontSize = `${fontChange}px`;
//     }
// }

function handlerInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
