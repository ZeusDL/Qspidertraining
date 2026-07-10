// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// 2. Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 3. Function Expression
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 6)); // 24

// 4. Higher-Order Function (returns another function)
const createMultiplier = (factor) => {
  return (num) => num * factor;
};
const double = createMultiplier(2);
console.log(double(5)); // 10

// 5. Callback Function
const processArray = (arr, callback) => {
  return arr.map(callback);
};
const squared = processArray([1, 2, 3, 4], (num) => num ** 2);
console.log(squared); // [1, 4, 9, 16]

function dailyRoutine(){
    console.log("Waking up at 6")
    console.log("Breakfast")
    console.log("College")
    console.log("Home")
    console.log("Snacks")
    console.log("Gym")
    console.log("Dinner")

}
dailyRoutine()