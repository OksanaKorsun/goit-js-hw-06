const items = document.querySelectorAll(".js-item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const things = item.querySelector("ul");
  const quantity = things.querySelectorAll("li");

  console.log(`Categories: ${title}`);
  console.log("Items:", quantity.length);
});

// const list = document.querySelector("#categories");
// console.dir(list);
// console.log(list.children);
