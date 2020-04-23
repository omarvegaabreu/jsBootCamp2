// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5); // with single number creates an array with 5 elements
// console.log(moreNumbers);

// const anotherNumbers = Array(5, 2);
// console.log(anotherNumbers);

// const name = "omar";
// const nameArray = Array.from(name); // turns a string of anther value to an array
// console.log(nameArray);

// const arrayMethods = ["One", "two", "three", "four"];
// arrayMethods.unshift("Jose"); // adds element to the front of the array
// const push = arrayMethods.push("last el"); // push adds an element to an array also returns array.length
// console.log(push);
// arrayMethods.pop(); //removes and returns the last element in an array
// console.log(arrayMethods);
// arrayMethods.shift(); //removes first element of the array and returns it

// const hobbies = ["jujitsu", "coding", "chess"];
// console.log(`before splice ${hobbies}`);
// hobbies.splice(0, 0, "new item");
// /**
//  * // splice ( index that you want to read, value of what you want to delete, what you want to add   )
//       on the third param you can add as many elements as you want.

//       **** splice also returns the removed elements
//  */

// hobbies.splice(-1, 0);
// /****
//  * //splice will also allow you to use negative values, using
//  * this will let you start the index in the end of the array

//  */
// hobbies.splice(0); // splice with 0 index will delete all items in the array

// console.log(`after splice ${hobbies}`);

// const testResults = [1, 2, 3.5, 5.5, 6, 10, -5];

// // const testResultsCopy = testResults.slice(); /***
// slice can be used to copy an array, the values will not be changed
// if the original array is manipulated
// Slice also supports negative values, which allow you to start from the end of the array.
// Slice will also allow the use of range ges slice(first value where you start,second where it ends) */
// testResults.push("new test result");

// console.log(testResults, testResultsCopy);

// The concat() method is used to merge two or more arrays.
// return value :A new Array instance.
//This method does not change the existing arrays, but instead returns a new array.
// const testResults = [8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const conCatTestResults = testResults.concat([11, 12, 13, 14]);
// testResults.push("20");
// console.log(`first array ${testResults}`);
// conCatTestResults.push("20");
// console.log(conCatTestResults);
/****
 * // The indexOf() method returns the index within the
 * calling String object of the first occurrence of the specified value,
 * starting the search at fromIndex.
 *  Returns -1 if the value is not found.
 *
 * *** DOES NOT WORK WELL WITH OBJECTS
 */
// testResults.indexOf(2); // returns the index of  first matching value starting from right
// testResults.lastIndexOf(8); //returns the index of  first matching value starting from left

/***
 * find()
 * The value of the first element in the array that satisfies the provided testing function.
 *  Otherwise, undefined is returned.
 */

// const person = [{ name: "omar" }, { name: "vega" }];
// const find = person.find((firstName) => {
//   return firstName.name === "vega";
// });
// console.log(find);

/****
 * .includes() works well with primitive values and it
 * returns true or false depending on if the value was found
 */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const includes = numbers.includes(2); //should return true
// const notIncludes = numbers.includes(110); //should return false
// console.log(includes); //returns true
// console.log(notIncludes); //returns false
// if (includes === true) {
//   console.log("includes in comparison operator");
// }

// if (!notIncludes) {
//   //flip value to return true meaning it was false
//   console.log("not includes in comparison operator");
// }

// const prices = [1.99, 2.99, 3.99, 4.99, 5.0];
// const tax = 0.7;
// const taxAdjustedPrices = [];

// prices.forEach((price, index, pricesArray) => {
//   const taxedPriceObject = {
//     index: index,
//     price: price,
//     taxedPrice: price * tax,
//   };

//   taxAdjustedPrices.push(taxedPriceObject);
// });

// console.log(taxAdjustedPrices);
// const prices = [12.99, 5.99, 3.99, 4.99];
// const tax = 0.07;

// const priceWithTaxes = prices.map((price, index) => {
//   const priceObject = {
//     index: index,
//     price: price,
//     totalPrice: price * tax + price,
//   };
//   return priceObject;
// });
// console.log(priceWithTaxes);
// console.log(`not sorted prices ${prices}`);
// const sortPrice = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else if (a < b) {
//     return -1;
//   } else {
//     console.log("error");
//   }
// });

// console.log(sortPrice);
// console.log(sortPrice.reverse());

/***
 * //array.filter() 
 * The filter() method creates a new array with all elements that 
 * pass the test implemented by the provided function.

  return: 
  A new array with the elements that pass the test. 
  If no elements pass the test, an empty array will be returned
*/
// const prices = [12.99, 5.99, 3.99, 4.99];
// const filteredPrices = prices.filter((price, index, prices) => {
//   return price > 5;
// });

// console.log(`filter: ${filteredPrices}`);

// const sum = prices.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );
// console.log(sum);
// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const transformedArray = originalArray.map((obj) => obj.price); // produces [10.99, 5.99, 29.99]
// const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// const numbers = [{ number: 1 }, { number: 2 }, { number: 3 }];
// const transformedNumbers = numbers.map((value) => value.number);

// const reducedNumbers = transformedNumbers.reduce(
//   (sumValue, CurrentValue) => sumValue + CurrentValue,
//   0
// );

// console.log(reducedNumbers);
// const data = "New York;10.99;Time;10.30";
// const dataSplit = data.split(";");
// console.log(dataSplit);
// const dataPrice = dataSplit[1];
// console.log(dataPrice);

// const names = ["Omar", "Vega", "Canuto", "Jose"];
// const fullName = names.join(" ");
// console.log(fullName);
// const name = ["omar", "abigail", "rosely", "papa"];
// const nameFragments = [...name];
// name.push("jose jose");
// console.log(name);

// console.log(nameFragments);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.min(numbers));

/***
 * ARRAY DESTRUCTURING
 */
// const nameData = ["Omar", "Vega", 38, "developer", "married", "2 children"];
// const [name, lastName, age, job, ...personal] = nameData;
// const personalInfo = personal;
// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(job);
// console.log(personalInfo);
