// Fizzbuzz - Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number
// and for multiples of five print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// Fibonacci Series - A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers.
// The simplest is the series 1, 1, 2, 3, 5, 8, etc. (Use recursive solution.)

//Print all prime numbers from 1 to n
//Negative numbers can't be prime.

function findPrime(n) {
  if (n < 2) {
    return false
  }

  //go through all numbers from 2 to n
  for (let i = 2; i < n; i++) {
    //check if n is divisible by i (which increments up from 2 to 1 number less than n)
    if (n % i === 0) {
      return false
    }
  }

  return true
}

for (let i = 0; i < 100; i++) {
  if (findPrime(100)) {
    console.log(i)
  }
}

//Find the sum of an array
function aVeryBigSum(n, ar) {
  let sum = 0

  for (let i = 0; i < n; i++) {
    sum += ar[i]
  }

  return sum
}

aVeryBigSum(5, [1,1,1,1,6])


//HackerRank - Colleen is having a birthday! She will have a cake with one candle for each year of her age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Find and print the number of candles she can successfully blow out.

function findMax(n, ar) {
  //find the max in the array and set as a variable
  const max = Math.max(...ar)

  //use filter to get only the elements in the array that equal the max value
  return ar.filter(x => x === max).length

}

findMax(4, [3, 1, 2, 3])

//ransom note
function ransom(magazine, ransom) {
  //make a hash map out of the magazine words
  magHash = {}
  let magazineWords = magazine.split(' ')
  let ransomWords = ransom.split(' ')

  for (let i = 0; i < magazineWords.length; i++) {
    if (magHash[magazineWords[i]]) {
      magHash[magazineWords[i]]++
    } else {
      magHash[magazineWords[i]] = 1
    }
  }

  //now we need to iterate through ransom and see if all the words in ransom are in magazine and then delete them
  let result = 'yes'
  for (let r = 0; r < ransomWords.length; r++) {
    if (magHash[ransomWords[r]] && magHash[ransomWords[r]] > 0) {
      magHash[ransomWords[r]]--
    } else {
      result = 'no'
    }
  }

  console.log(magHash)
}

ransom('give me one grand today night', 'give one grand today')
