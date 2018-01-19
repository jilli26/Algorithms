// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //first we get rid of all the spaces and punctuation
  const modifiedStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
  const modifiedStringB = stringB.replace(/[^\w]/g, "").toLowerCase()

  //iterate through each of the strings and make them objects
  //use objects to count the occurrence of each string
  let modifiedStringAObject = {}
  let modifiedStringBObject = {}

  for (let character of stringA) {
    if (!modifiedStringAObject[character]) {
      modifiedStringAObject[character] = 1
    } else {
      modifiedStringAObject[character]++
    }
  }

  for (let character of stringB) {
    if (!modifiedStringBObject[character]) {
      modifiedStringBObject[character] = 1
    } else {
      modifiedStringBObject[character]++
    }
  }

  //check if the object keys length is the same in both
  if (Object.keys(modifiedStringAObject).length !== Object.keys(modifiedStringBObject).length) {
    return false
  }

  //compare both string objects
  for (let character in modifiedStringAObject) {
    if (modifiedStringAObject[character] !== modifiedStringBObject[character]) {
      return false
    }
  }

  return true
}

console.log(anagrams('rail safety', 'fairy tales'));

module.exports = anagrams;
