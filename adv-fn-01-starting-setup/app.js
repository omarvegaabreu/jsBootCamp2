///***pure function */
///**does not change anything outside the function * / "no side effects"
///**the function always returns the same values with given parameters */

add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 5)); //will always return 10 regardless of refresh
console.log(add(10, 10)); //will always return 20 regardless of refresh

///**impure function */
//does not produce the same result every time

add = (num1, num2) => {
  return num1 + Math.random(num2);
};

console.log(add(1));

//modifies an array or variable outside the function
let modifiedVariable = 1;
add = (num1, num2) => {
  const sum = num1 + num2;
  modifiedVariable = sum;
  return sum;
};
add(5, 2);
console.log(modifiedVariable);

const modifiedArray = ["one", "two", "three"];
modify = (array) => {
  array.push("FOUR");
  console.log(array);
};
modify(modifiedArray);

calculateTax = (amount, taxRate) => {
  return amount * taxRate;
};

const salesTax = calculateTax(100, 0.07);
console.log(parseInt(salesTax)); //7

const incomeTax = calculateTax(100, 0.25); //25
console.log(Math.ceil(incomeTax));

///**factory function */
///**is a function inside a function */

taxCalculator = (taxPercent) => {
  console.log(taxPercent);
  percentCalculator = (amount) => {
    return amount * taxPercent;
  };
  return percentCalculator;
};

const salesTax2 = taxCalculator(100);
const incomeTax2 = taxCalculator(100);
console.log(salesTax2(0.07)); //will return 7.0000
console.log(incomeTax2(0.25)); //will return 25

let userName = "omar";

greetUser = () => {
  let name = "omar";
  console.log(`hi ${name}`);
};
let name = "Rosely";
greetUser();

function recursion(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * recursion(x, n - 1);
  return n === 1 ? x : x * recursion(x, n - 1);
}

const recursionResult = recursion(2, 3);
console.log(recursionResult);
