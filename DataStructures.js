//1. Basic Data Structures: Use an Array to Store a Collection of Data
let yourArray = [1, 2, 3, "four", false]; // change this line

//2. Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = "anything";
//change code above this line
console.log(myArray);

//3. Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(["IV", 5, "six"]));

//4. Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(["challenge", "is", "not", "complete"]));

//5. Remove Items Using splice()
function sumOfTen(arr) {
  // change code below this line
  arr.splice(2, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//6. Add Items Using splice()
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick"
  ])
);

//7.Copy Array Items Using slice()
function forecast(arr) {
  // change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// do not change code below this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

//8. Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
