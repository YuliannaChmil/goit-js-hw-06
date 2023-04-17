const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = logForm.elements;
  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const logData = {
    email: email.value,
    password: password.value,
  };
  console.log(logData);
  logForm.reset();
});
