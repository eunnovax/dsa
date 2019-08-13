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
  console.log("array of words", strArr);
  strArr.forEach(word => {
    console.log("word", word);
    wordLength.push(word.length);
  });
  console.log("word array", wordLength);
  let longest = Math.max(...wordLength);
  console.log("longest", longest);
  return longest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//ALTERNATE SOLNS
function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
// 2ND ALTERNATE SOLN
function findLongestWordLength(s) {
  return s.split(" ").reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
}

//5. Return Largest Numbers in Arrays
function largestOfFour(arr) {
  // You can do this!
  let i = 0;
  let newArr = [];
  arr.forEach(subArr => {
    newArr[i] = Math.max(...subArr);
    i++;
  });
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

//6. Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let strArr = [];
  let targetArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }
  console.log("strArr", strArr);
  for (let i = 0; i < target.length; i++) {
    targetArr.push(target[i]);
  }

  let compara = [];
  console.log("targetArr", targetArr);
  for (let j = 1; j <= targetArr.length; j++) {
    console.log("strArr[strArr.length - j]", strArr[strArr.length - j]);
    compara.unshift(strArr[strArr.length - j]);
    console.log("compara", compara);
  }
  console.log("compara", compara);
  console.log("targetArr", targetArr);
  let jj = 0;
  for (let i = 0; i < compara.length; i++) {
    if (compara[i] === targetArr[i]) {
      jj++;
    }
  }
  if (jj === compara.length) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n"));

// ALTERNATE SOLN
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

//7. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

//8. Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  let tStr = str.slice(0, num) + "...";
  console.log(tStr);
  if (str.length <= num) {
    return str;
  }
  return tStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//9. Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//10. Boo who
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true) {
    return true;
  } else if (bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);

//11. Title Case a Sentence
function titleCase(str) {
  let arr = str.split(" ");
  //console.log(arr)
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let be = arr[i][0].toUpperCase();
    newArr[i] = be + arr[i].slice(1, arr[i].length + 1);
    console.log(newArr);
  }
  let stri = "";
  for (let i = 0; i < newArr.length; i++) {
    if (i === newArr.length - 1) {
      stri += newArr[i];
    } else {
      stri += newArr[i] + " ";
    }

    console.log(stri);
  }
  return stri;
}

titleCase("I'm a little tea pot");
