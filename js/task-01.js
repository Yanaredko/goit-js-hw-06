const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const header = item.querySelector('h2').textContent;
    const subItems = item.querySelectorAll(`ul li`);

    console.log(`Category: ${header}`);
    console.log(`Elements: ${subItems.length}`);
});
