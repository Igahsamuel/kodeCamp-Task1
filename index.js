// write a javascript function that accepts a string as a parameter and converts the first letter of each word into uppercase
function upperCase(name) {
  const word = name.split(" ");
  const capital = word.map((first) => {
    const firstLetter = first.charAt(0).toUpperCase();
    const restWord = first.slice(1);
    return firstLetter + restWord;
  });
  return capital.join("");
}
console.log(upperCase("igah, Abiye"));

// Write a javascript function that accepts a string as a parameter and finds the longest word within the string
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
console.log(longestWord("What is the name of your secondary school"));

// Write a javascript function that accepts a number as a parameter and checks whether it is prime or not
function primeCheck(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(primeCheck(1));
console.log(primeCheck(2));
console.log(primeCheck(12));

// Write a javascript function that accepts an argument and returns the type
function typeChecker(check) {
  return typeof check;
}
console.log(typeChecker(1));
console.log(typeChecker("sam"));
// Write a javascript function that takes an array of numbers and finds the second lowest and second greatest numbers
function secondNumber(num) {
  //  sort the numbers in order of their arrangement
  const sortNumbers = num.sort((a, b) => a - b);
  // find the lowest number
  const secondLowest = sortNumbers[1];
  // find the second higest
  const secondHighest = sortNumbers[num.length - 2];
  return [secondLowest, secondHighest];
}
console.log(secondNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(secondNumber([-100, 20, 30, 40, 50, 60, 70, -200]));
