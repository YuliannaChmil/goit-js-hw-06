const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulOfingredients = document.getElementById("ingredients");
const listIngredients = ingredients.map(ingredient =>{
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
})
ulOfingredients.append(...listIngredients);