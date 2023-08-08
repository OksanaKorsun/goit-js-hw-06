const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const list = document.querySelector('#ingredients');
// console.log(list);
// const items = ingredients.map(ingredient => {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     li.classList.add('item')
//     return li;
// })
// console.dir(items);
// list.append(...items);
// console.log(items);

const list = document.getElementById("ingredients");
function createMarkup(arr) {
  const markup = arr.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    console.dir(li);
    return li;
  });
  list.append(...markup);
}
createMarkup(ingredients);
