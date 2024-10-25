const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
});
