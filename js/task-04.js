let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]'); 
const valueEl = document.querySelector('#value');


btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

