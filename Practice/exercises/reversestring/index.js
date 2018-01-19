// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let newStr = ''
//
//   for (let i = (str.length - 1); i > -1; i--) {
//     newStr += str[i]
//   }
//
//   return newStr
//
// }

// function reverse(str) {
//   return str.split('').reverse().join('')
// }


function reverse(str) {
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
    debugger
  }

  return reversed
}

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => character + reversed)
// }

reverse('hello')

module.exports = reverse;
