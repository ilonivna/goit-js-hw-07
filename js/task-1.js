const items = document.querySelectorAll(".item");

console.log((`Number of categories: ${items.length}`));

const titles = document.querySelectorAll('.item > h2');

titles.forEach((title) => {
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const categoriesItems = title.parentElement.querySelectorAll('ul>li');
    console.log(`Elements: ${categoriesItems.length}`)
});
