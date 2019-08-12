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
