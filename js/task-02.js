const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elList = document.querySelector('#ingredients');

const elItem = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join(' ');
  
elList.insertAdjacentHTML('afterbegin', elItem);



