const elements = {
  form: document.querySelector(".login-form"),
};
elements.form.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    const message = "Please fill in all the fields!";
    return alert(message);
  }
  console.log({ Email: email.value, Password: password.value });
  evt.currentTarget.reset();
}
