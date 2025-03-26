/* 
Question 1: Can you write a function in JavaScript to reverse the order of words in a given string?

input "this is mine!"
output "!enim si siht"

*/

const reverse = (text) => {
  return text.split("").reverse().join("");
};

console.log(reverse("this is mine!"));
