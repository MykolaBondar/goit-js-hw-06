const listEl = document.querySelector(`ul#categories`);
const itemQuantity = listEl.querySelectorAll('.item').length;
console.log('Number of categories:', itemQuantity);

const itemEl = document.querySelectorAll('.item');

const itemElShowContext = itemEl.forEach((child) => {
  console.log(`Category: ${child.querySelector('h2').textContent}`);
  console.log(`Elements:${child.querySelectorAll('li').length}`);
});
