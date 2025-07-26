let currentInput = '';
let previousInput = '';
let operator = '';

function appendNum(number) {
    currentInput += number;
    updateDisplay();
}

function appendOp(op){
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '';
    operator = op;
    updateDisplay();
}

function dot(){
    if (currentInput.includes('.')) return;
    currentInput += '.';
    updateDisplay();
}

function calculate() {    
    let result = 0
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = ` ${previousInput} ${operator} ${currentInput}`.trim();
}