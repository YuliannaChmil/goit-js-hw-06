const inputValid = document.getElementById("validation-input");
const dataLength = inputValid.getAttribute("data-length");
inputValid.addEventListener("blur", () => {
  const valueLength = inputValid.value.trim().length;
  if (valueLength === Number(dataLength)) {
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  } else {
    inputValid.classList.add("invalid");
    inputValid.classList.remove("valid");
  }
});
