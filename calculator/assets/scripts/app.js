const defaultValue = 0;
let currentResult = defaultValue;

function getUSerInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutPut(operator, resultBeforeCal, calNumber) {
  return ` ${resultBeforeCal} ${operator} ${calNumber}`;
}

function add() {
  const inputValue = getUSerInput();
  // const calDescription = ` ${currentResult} + ${inputValue}`;
  currentResult = currentResult + inputValue;
  createAndWriteOutPut("+", currentResult, calDescription);
}

function subtract() {
  currentResult = defaultValue;
  const inputValue = getUSerInput();
  // const calDescription = ` ${currentResult} - ${inputValue}`;
  currentResult = currentResult - inputValue;
  createAndWriteOutPut("-", currentResult, calDescription);
}

function multiply() {
  currentResult = defaultValue;
  const inputValue = getUSerInput();
  // const calDescription = ` ${currentResult} - ${inputValue}`;
  currentResult = currentResult * inputValue;
  createAndWriteOutPut("*", currentResult, calDescription);
}

function divide() {
  currentResult = defaultValue;
  const inputValue = getUSerInput();
  // const calDescription = ` ${currentResult} - ${inputValue}`;
  currentResult = currentResult / inputValue;
  createAndWriteOutPut("/", currentResult, calDescription);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
