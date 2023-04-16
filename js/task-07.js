const inputControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
inputControl.addEventListener("input", () => {
  text.style.fontSize = `${inputControl.value}px`;
});
