const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

// Generates and writes calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
};

//push to log function
const writeToLog = (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};
//programming logic for calculations
const calculate = (operation) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  switch (operation) {
    case operation === "ADD":
      currentResult += enteredNumber;
      createAndWriteOutput("+", initialResult, enteredNumber);
      writeToLog("ADD", initialResult, enteredNumber, currentResult);
      break;
    case operation === "SUBTRACT":
      currentResult -= enteredNumber;
      createAndWriteOutput("-", initialResult, enteredNumber);
      writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
      break;
    case operation === "MULTIPLICATION":
      currentResult *= enteredNumber;
      createAndWriteOutput("*", initialResult, enteredNumber);
      writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
      break;
    case operation === "DIVISION":
      currentResult /= enteredNumber;
      createAndWriteOutput("/", initialResult, enteredNumber);
      writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
      break;
    default:
      break;
  }
};

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
