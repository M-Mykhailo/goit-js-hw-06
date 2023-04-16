const rangeInput = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

rangeInput.addEventListener('input', changeFontSize)

function changeFontSize(event) {

    textSpan.style.fontSize = `${event.target.value}px`

}


