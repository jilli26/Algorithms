// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (typeof n > 0) {
    const reversedInt = parseInt(n.toString().split('').reverse().join(''))
  } else if (n < 0) {
    reversedInt = -(parseInt(n.toString().split('').reverse().join('')))
  } else {
    reversedInt = n.toString().split('').reverse().join('')
  }
  return parseInt(reversedInt)
}

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-9));

module.exports = reverseInt;
