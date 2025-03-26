// Create a program wich evaluate if a string of symbols is well formed regarding opening and closing tags
// example:
// evaluate('{[()]}') => true
// evaluate('{[(}') => false

const evaluate = (stringToEval) => {
  const arrayToEvaluate = stringToEval.split("");
  const stack = [];

  if (!validateInput(arrayToEvaluate)) {
    return false;
  }

  arrayToEvaluate.forEach((currentTag) => {
    if (currentTag === "{" || currentTag === "[" || currentTag === "(") {
      stack.push(currentTag);
    }

    if (currentTag === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      }
    }

    if (currentTag === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }

    if (currentTag === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  });

  return stack.length === 0;
};

const validateInput = (input) => {
  if (input.length === 0) {
    return false;
  }

  if (!input.find((item) => item === "{" || item === "[" || item === "(")) {
    return false;
  }

  return true;
};

// Test cases

console.log(evaluate("{[()]}")); // true
console.log(evaluate("{[(]")); // false
console.log(evaluate("{[()()]}")); // true
console.log(evaluate("")); // false
console.log(evaluate("ertyery")); // false
console.log(evaluate(")}")); // false
console.log(evaluate("(())")); // true
console.log(evaluate("(()")); // false
console.log(evaluate("dfhdf)")); // false
