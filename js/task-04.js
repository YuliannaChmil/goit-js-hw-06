let counterValue = 0;
const negativeBtn = document.querySelector('[data-action="decrement"]');
const positiveBtn = document.querySelector('[data-action="increment"]');
const valueOfBtn = document.querySelector("#value");
negativeBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueOfBtn.textContent = counterValue;
});
positiveBtn.addEventListener("click", () => {
  counterValue += 1;
  valueOfBtn.textContent = counterValue;
});
