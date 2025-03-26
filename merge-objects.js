// Question 3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?
// ----------- Can you write a function to merge any amount of objects without overwriting existing properties?

const mergeTwoObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const mergeObjects = (...args) => {
  // declarative aproach
  // let result = {};
  // for (const element of args) {
  //   result = { ...result, ...element };
  // }
  // return result;

  // functional aproach
  return args.reduce((accumulator, current) => {
    return { ...accumulator, ...current };
  }, {});
};

const user = { name: "Juan", age: 13 };
const skills = { fly: true, eat: true };
const experience = { react: true, angular: true };

// console.log(mergeTwoObjects(user, skills));
console.log(mergeObjects(user, skills, experience));
