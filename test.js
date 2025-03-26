// This empty for arrow functions

// const user = {
//   name: "John",
//   talk: () => {
//     console.log(this);
//   },
// };
// user.talk();

// // this = user for regular functions
// const client = {
//   name: "John",
//   talk: function () {
//     console.log(this);
//   },
// };
// client.talk();


/////////////

// var test = "test";
// const pi = 314;

// {
//   let name = "John";
// }

// console.log(name); // not work because is out of the scope of name
//////////////

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]



