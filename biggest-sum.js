/*  
Dado un array de números enteros,  
devuelve la suma más grande  
entre dos números adyacentes.  
*/

const array = [1, 3, 4, 6];

const getBiggestPairSum = (array) => {
  let sum = 0;

  // declarative aproach
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index] + array[index + 1] || sum;
  //   sum = Math.max(sum, element);
  // }

  // functional aproach
  array.forEach((element, index) => {
    const newSum = element + array[index + 1] || sum;
    sum = Math.max(newSum, sum);
  });

  return sum;
};

console.log(getBiggestPairSum(array));
