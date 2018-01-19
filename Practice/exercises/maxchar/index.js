// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {}
  var max = 0
  var maxChar = ''

  for (var character of str) {
    if (!obj[character]) {
      obj[character] = 1
    } else {
      obj[character]++
    }
  }

  console.log(obj);

  for (var character in obj) {
    if (obj[character] > max) {
      max = obj[character]
      maxChar = character
    }
  }

  return maxChar

}

console.log(maxChar('Hello there'));
console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
module.exports = maxChar;
