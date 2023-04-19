const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elList = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const elItem = document.createElement("li");
  elItem.textContent = ingredient;
  elList.append(elItem);
}


// const elItem = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join(' ');
  
// elList.insertAdjacentHTML('afterbegin', elItem);


