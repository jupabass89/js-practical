// SCOPE VS CONTEXT

// SCOPE

//GLOBAL
var global = 'JP'
function globalFunc() {
	console.log(global);
}
globalFunc(); // JP

// BLOCK
function letScope() {
	{
		let scope = 'SG';
	}
	console.log(scope);
}
letScope() // error: undefined

// FUNCTION
function varScope() {
	{
		var scope = 'SG';
	}
	console.log(scope);
}
varScope() // SG



//CONTEXT

var name = 'PG';

var contextA = {
	name: 'GR',
	print: function() {
		console.log(this.name);
	}
}
contextA.print(); // GR
console.log(this.name); // PG





// CLOSURES

//SIMPLE
function father(x) {
  var privateCounter = 2;
  return function closure() {
     return privateCounter + x
  }  
}
father(5)() // 7


//PRIVACITY CLOSURE
var Counter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
}

console.log(Counter.value()); // 0
Counter.increment();
Counter.increment();
console.log(Counter.value()); // 2
Counter.decrement();
Counter.decrement();
console.log(Counter.value()); // 0
console.log(Counter.privateCounter) //undefined




// CONST VS VAR VS LET

//Var
var testVar = 3;
var testVar = 4;

console.log(testVar) // 4

//let
let testLet = 3;
let testLet = 4; // redeclare error

testLet = 4; 

//let
let testLet2 = 3;
testLet2 = 4; 

console.log(testLet2) // 4

//const
const testConst = 3;
testConst = 4; // reasignation error




