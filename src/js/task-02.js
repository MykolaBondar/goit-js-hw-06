const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul#ingredients');
for (const ingredient of ingredients) {
  const createItemEl = document.createElement('li');
  createItemEl.textContent = ingredient;
  createItemEl.classList.add('item');
  listEl.append(createItemEl);
}
