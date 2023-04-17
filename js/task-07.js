const inputControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = `${inputControl.value}px`;
inputControl.addEventListener("input", () => {
  text.style.fontSize = `${inputControl.value}px`;
});
