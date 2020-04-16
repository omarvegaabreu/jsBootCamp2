const sayHello = (name) => {
  console.log("Hi " + name);
};
sayHello("Omar");

const sayHelloAgain = (name, greeting) => {
  console.log(`THIS IS WITH 2 ARGUMENTS: ${greeting},${name}`);
};
sayHelloAgain("Omar", "Hi");

const sayHelloAgainNoArgs = () => {
  console.log(`Hi Omar with no arguments`);
};
sayHelloAgainNoArgs();

const sayHelloReturn = (name = "JoseJose") => {
  return `"Hi  ${name}`;
};

console.log(sayHelloReturn());

const greeting = (name) => {
  alert("Hello " + name);
};

const processUserInput = (callback) => {
  const name = prompt("Please enter your name.");
  callback(name);
};

processUserInput(greeting);
