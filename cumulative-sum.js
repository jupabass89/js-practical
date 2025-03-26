// Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array?

const cumulativeSum = (arr) => {
  // declarative aproach
  // let sum = 0;
  // for (const element of object) {
  //   sum = sum + element;
  // }
  // return sum;

  // functional aproach
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(cumulativeSum([1, 2, 3]));
