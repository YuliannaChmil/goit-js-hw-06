const numberOfCategories = document.getElementById("categories");
console.log(`Number of categories: ${numberOfCategories.children.length}`);
const categoriesItems = numberOfCategories.querySelectorAll(".item");
categoriesItems.forEach((item) => {
  const itemName = item.querySelector("h2");
  const itemList = item.querySelector("ul");
  const numberOfListItem = itemList.querySelectorAll("li").length;
  console.log(`Category: ${itemName.textContent}`);
  console.log(`Elements: ${numberOfListItem}`);
});
