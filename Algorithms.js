//1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

//2. Reverse a String
function reverseString(str) {
  let word = [];
  let rword = "";
  for (let i = 0; i < str.length; i++) {
    word.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    rword += word.pop();
  }
  return rword;
}

reverseString("hello");

//3. Factorialize a Number
let factorial = 1;
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  while (num > 1) {
    factorial = factorial * num;
    console.log("factorial", factorial);
    num--;
    factorialize(num);
    return factorial;
  }
}

console.log("factorialize", factorialize(10));
///ALTERNATE SOLUTION
let factorial = 1;
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log("factorialize", factorialize(0));

//4. Find the Longest Word in a String
function findLongestWordLength(str) {
  let wordLength = [];
  let nonSpaceRegex = /(\w+)/g;
  let strArr = str.match(nonSpaceRegex); 
  console.log("array of words", strArr)
  strArr.forEach(word => {
    console.log('word', word);
    wordLength.push(word.length); 
  })
  console.log('word array', wordLength);
  let longest = Math.max(...wordLength);
  console.log("longest", longest);
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");