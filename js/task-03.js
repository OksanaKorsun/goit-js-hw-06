const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const body = document.querySelector('body');
// body.style.backgroundColor = 'teal'
const list = document.querySelector(".gallery");
list.style.listStyle = "none";
list.style.display = "flex";
// list.style.flexDirection = 'column';
list.style.gap = "30px";
console.dir(list);

function createGallery(arr) {
  const markup = arr
    .map(
      ({ url, alt }) =>
        `<li><img src="${url}" alt="${alt}" width=320 height = 200</li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
  console.log(markup);
}
createGallery(images);
