const mainForm = document.querySelector('.login-form');

mainForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
    let objectForm = {};

    const emailValue = mainForm.elements.email.value.trim();
    const passwordValue = mainForm.elements.password.value.trim();
    const emailName = mainForm.elements.email.name;
    const passwordName = mainForm.elements.password.name;

    if (emailValue === '' || passwordValue === '') {
        return alert('You have unfilled fields!!!');
    }

    objectForm[emailName] = emailValue;
    objectForm[passwordName] = passwordValue;
    console.log(objectForm);

    mainForm.reset();
}
