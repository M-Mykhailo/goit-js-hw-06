const listEl = document.querySelector("#categories");

console.log(`Number of categories: ${listEl.children.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((item) => {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.children.length}`);
});
