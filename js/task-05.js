const valueOutput = 'Anonymous';

const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', onInput);

function onInput(event) {
    if (event.target.value.trim() === '') {
        textOutput.textContent = valueOutput;
    } else {textOutput.textContent = event.target.value;}
}