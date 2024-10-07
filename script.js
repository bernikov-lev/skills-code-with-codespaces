let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number, element) {
    currentOperand += number;
    updateDisplay();
    setActiveButton(element);
}

function chooseOperation(op, element) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    setActiveButton(element);
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
    clearActiveButtons();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
    clearActiveButtons();
}

function updateDisplay() {
    display.value = currentOperand;
}

function setActiveButton(element) {
    clearActiveButtons();
    element.classList.add('active');
}

function clearActiveButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
}