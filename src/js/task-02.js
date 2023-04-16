const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulOfingredients = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const liOfingredients = document.createElement("li");
  liOfingredients.textContent = ingredient;
  liOfingredients.classList.add("item");
  ulOfingredients.append(liOfingredients);
});
