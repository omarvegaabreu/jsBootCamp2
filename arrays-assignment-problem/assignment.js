const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = numbers.filter((number) => number > 5); //5,6,7,8,9,10
const mappedFilteredNumbers = filteredNumbers.map((number) => ({
  num: number,
}));
const reduce = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue,
  1
);
console.log(reduce);

const findMax = (...nums) => {
  let currentMax = nums[0];
  for (const num of nums) {
    if (num > currentMax) {
      currentMax = num;
    }
  }
  return currentMax;
};
console.log(findMax(...numbers));

onst findMax = (...nums) => {
  let currentMax = nums[0];
  let currentMin = num[0]
  for (const num of nums) {
    if (num > currentMax) {
      currentMax = num;
    }
    if (num < currentMin) {
      currentMin = num
    }
  }
  return currentMax;
};
console.log(findMax(...numbers));

