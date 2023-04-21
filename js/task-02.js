const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const itemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
ingredientsEl.append(...itemsEl);







// const elList = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const elItem = document.createElement("li");
//   elItem.textContent = ingredient;
//   elItem.classList.add('item')
//   elList.append(elItem)
// }


// const elItem = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join(' ');
  
// elList.insertAdjacentHTML('afterbegin', elItem);
