// const keyName = "assign variable value to key name";
// const age = 35;

// const person = {
//   name: "Omar",
//   lastName: "Vega",
//   hobbies: ["chess", "jujitsu", "friends"],
//   [keyName]: "TO DYNAMICALLY ASSIGN", //THIS IS DONE ON DYNAMIC INPUT, TO HAVE USER CREATE OBJECT
//   greeting: () => {
//     alert("hi there");
//   },
// };
// person[age] = 38;
// console.log(person);

// const propKey = "field 12";
// const person = {
//   [propKey]: "Max",
// };
// console.log(person["field 12"]);

// const person = {
//   name: "rosely",
//   lastName: "de los santos",
//   age: 28,
// };
// console.log(person);

const age = "age";
const number = 30;

const otherPerson = {
  name: "rosely",
  [age]: [number],
};
console.log(otherPerson);
