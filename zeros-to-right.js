/* 
Create a function tha order an array like this

 input [0,0,2,4,5,0,0,1,0]
 output [2,4,5,1,0,0,0,0,0]

*/

const input = [0, 0, 2, 4, 5, 0, 0, 1, 0];

const zerosToRight = (inputArray) => {
  let zeros = [];
  let numbers = [];

  // declarative aproach
  // for (let index = 0; index < inputArray.length; index++) {
  //   const element = inputArray[index];
  //   if (element === 0) {
  //     zeros.push(element);
  //   } else {
  //     numbers.push(element);
  //   }
  // }

  // functional aproach
  inputArray.forEach((element) => {
    if (element === 0) {
      zeros.push(element);
    } else {
      numbers.push(element);
    }
  });

  return [...numbers, ...zeros];
};

console.log(zerosToRight(input));
