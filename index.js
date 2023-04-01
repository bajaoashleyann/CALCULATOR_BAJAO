const input = document.querySelector('#calculator-input');
const buttons = document.querySelectorAll('.calculator-button');


let currentOperator = null;
let currentValue = null;
let hasDecimal = false;


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else if (value === '.') {
      addDecimal();
    } else if (isOperator(value)) {
      setOperator(value);
    } else {
      addNumber(value);
    }
  });
});


function addNumber(number) {
  if (input.value === '0') {
    input.value = number;
  } else {
    input.value += number;
  }
}


function addDecimal() {
  if (!hasDecimal) {
    input.value += '.';
    hasDecimal = true;
  }
}


function setOperator(operator) {
  currentValue = parseFloat(input.value);
  currentOperator = operator;
  input.value = '0';
  hasDecimal = false;
}


function calculate() {
  const newValue = parseFloat(input.value);
  let result;
  switch (currentOperator) {
    case '+':
      result = currentValue + newValue;
      break;
    case '-':
      result = currentValue - newValue;
      break;
    case '*':
      result = currentValue * newValue;
      break;
    case '/':
      result = currentValue / newValue;
      break;
  }
  input.value = result.toString();
  currentOperator = null;
  hasDecimal = input.value.includes('.');
}


function clear() {
  input.value = '0';
  currentOperator = null;
  currentValue = null;
  hasDecimal = false;
}


function isOperator(character) {
  return ['+', '-', '*', '/'].includes(character);
}

