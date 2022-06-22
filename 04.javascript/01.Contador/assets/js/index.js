var currentNumberWrapper = document.getElementById('currentNumber');
var buttonUp = document.getElementById('buttonUp');
var buttonDown = document.getElementById('buttonDown');
var currentNumber = 0;

function increment() {
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

buttonUp.addEventListener('click', increment);
buttonDown.addEventListener('click', decrement);
