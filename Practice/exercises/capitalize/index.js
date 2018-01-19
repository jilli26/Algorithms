// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //split at the spaces - ['a', 'short', 'sentence']
  let array = str.split(' ')
  const words = []

  //iterate through all of the elements in the array and element[0].toUpperCase()
  //this becomes ['A', 'Short', 'Sentence']
  for (word of array) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  //then we need to make it a string again
  return words.join(' ')
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;
