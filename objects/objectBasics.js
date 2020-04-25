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

// const age = "age";
// const number = 30;

// const otherPerson = {
//   name: "rosely",
//   [age]: [number],
// };
// console.log(otherPerson);

const person = {
  // original object
  name: "omar",
  lastName: "Vega",
  hobbies: ["chess", "computers", "jujisu"],
  //spread does not create a copy of nested elements in an object
  //if you make changes to the copy ex person 2 the elements will reflecto on the original object
};
console.log(person);
const person2 = { ...person }; //spread object
console.log(person2);

const person3 = { ...person, hobbies: [...person.hobbies] };
//in order to do a full copy of nested objects you must define the key value pair in the
//new nested object
person3.hobbies.push("anotherone");
console.log(person3);
