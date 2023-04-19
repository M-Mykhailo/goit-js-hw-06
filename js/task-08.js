const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let objectForm = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("You have unfilled fields!!!");
  }

  objectForm[email.name] = email.value.trim();
  objectForm[password.name] = password.value.trim();
  console.log(objectForm);

  mainForm.reset();
}

// const emailValue = mainForm.elements.email.value.trim();
// const passwordValue = mainForm.elements.password.value.trim();
// const emailName = mainForm.elements.email.name;
// const passwordName = mainForm.elements.password.name;
