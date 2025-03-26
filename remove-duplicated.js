// create a function wich get an array of numbers and output another one without duplicated elements.
// [1,3,4,4,5] => [1,3,4,5]

const removeDuplicated = (values) => {
  return Array.from(new Set(values));
  // return [...new Set(values)];
};

console.log(removeDuplicated([1, 3, 4, 4, 5]));
