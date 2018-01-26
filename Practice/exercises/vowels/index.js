// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   //set count = 0
//   let count = 0
//
//   //iterate through the string and if they're vowels, add it to the count
//   for (let char of str.toLowerCase()) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++
//     }
//   }
//
//   //count the number of vowels in the array and return it
//   return count
// }

// function vowels(str) {
//   //set count = 0
//   let count = 0
//   let checker = ['a', 'e', 'i', 'o', 'u']
//
//   //iterate through the string and if they're vowels, add it to the count
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++
//     }
//   }
//
//   //count the number of vowels in the array and return it
//   return count
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

console.log(vowels('Why do you ask?'));

module.exports = vowels;
