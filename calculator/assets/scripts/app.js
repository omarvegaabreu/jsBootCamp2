const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//populates log entries object pushes to logEntries array
function calculateResults(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  //check for entered calculation type
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber // to check for 0 which is falsy
  ) {
    return;
  }

  //runs calculation type
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    return;
  }
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

//generate data for logEntries object
function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: previousResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
//get value from input in index.js
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//renders math operation to screen
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //imp from vendor.js
}

function add() {
  calculateResults("ADD");
}

function subtract() {
  calculateResults("SUBTRACT");
}

function multiply() {
  calculateResults("MULTIPLY");
}
function divide() {
  calculateResults("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
