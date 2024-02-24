const items = document.querySelectorAll(".item");
const itemsLength = items.length;

function itemsCalc(items) {
    return(`Number of categories: ${itemsLength}`);
}

console.log(itemsCalc(items));

const titles = document.querySelectorAll('h2');

titles.forEach((title) => {
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const categoriesNames = title.parentElement.querySelectorAll('ul>li');
    console.log(`Elements: ${categoriesNames.length}`)
});
