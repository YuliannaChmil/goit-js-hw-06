const numberOfCategories = document.getElementById("categories");
console.log(`Number of categories: ${numberOfCategories.children.length}`);

const categoriesItems = document.querySelectorAll(".item");
categoriesItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
