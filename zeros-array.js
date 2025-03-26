// create an array of zeros with lenght n
const zerosArray = (n) => {
  return new Array(n).fill(0);
  // return Array.from({ length: n }, () => 0);
};

console.log(zerosArray(10));
