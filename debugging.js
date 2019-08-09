// 1. console.log
let a = 5;
let b = 1;
a++;
// Add your code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

//2. Debugging: Understanding the Differences between the freeCodeCamp and Browser Console
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();

// Use console.log() to print the outputOne variable
console.log(outputOne);

//3. Debugging: Use typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
console.log(typeof three);

//4. Debugging: Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log("Net working capital is: $", netWorkingCapital);
