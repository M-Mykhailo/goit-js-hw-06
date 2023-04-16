const listEl = document.querySelector('#categories');

console.log(`Number of categories: ${listEl.children.length}`);



const itemEl = document.querySelectorAll('.item')

itemEl.forEach((item) => {
    const category = item.querySelector('h2');
    const elements = item.querySelectorAll('li');
    console.log(`Category: ${category.textContent}, Elements: ${elements.length}`);
});
