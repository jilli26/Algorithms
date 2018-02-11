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

//anagrams Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

function anagrams(a,b) {
  let copyA = a.slice(0)
  let copyB = b.slice(0)
  let hashA = {}
  let hashB = {}

  if (copyA.split('').sort() !== copyB.split('').sort()) {
    //do a hashmap for a
    for (let i = 0; i < copyA.length; i++) {
    console.log(copyA[i])
      if (hashA[copyA[i]]) {
        hashA[copyA[i]]++
      } else {
        hashA[copyA[i]] = 1
      }
    }

    //hashmap for b
    for (let i = 0; i < copyB.length; i++) {
    console.log(copyB[i])
      if (hashB[copyB[i]]) {
        hashB[copyB[i]]++
      } else {
        hashB[copyB[i]] = 1
      }
    }

    //see which keys don't match up
    if (hashA !== hashB) {
      //
      for (let key in hashA) {
        for (let another in hashB) {
          if () {
            hashA[key] = 0
            hashB[another] = 0
          }
        }
      }

    }
  }


  console.log(hashA)
  console.log(hashB)
}

anagrams('cba', 'edc')


//A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
//Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

function leftRotation(a, d) {
  //first make a copy of the array so we aren't working on the original
  let copy = a.slice(0)
  let counter = 0
  //use shift to remove the first element from the array (a) and push it to the end of the array
  while (counter < d) {
    //shift and then push
    let firstElement = copy.shift()
    copy.push(firstElement)
    counter++
  }
  return copy
}

leftRotation([1,2,3,4,5], 4)




//time in words 
function timeInWords(h, m) {
  const hours = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
  }

  const minutes = {
    1:"one minute",
    2:"two minutes",
    3:"three minutes",
    4:"four minutes",
    5:"five minutes",
    6:"six minutes",
    7:"seven minutes",
    8:"eight minutes",
    9:"nine minutes",
    10:"ten minutes",
    11:"eleven minutes",
    12:"twelve minutes",
    13:"thirteen minutes",
    14:"fourteen minutes",
    15:"quarter",
    16:"sixteen minutes",
    17:"seventeen minutes",
    18:"eighteen minutes",
    19:"nineteen minutes",
    20:"twenty minutes",
    21:"twenty one minutes",
    22:"twenty two minutes",
    23:"twenty three minutes",
    24:"twenty four minutes",
    25:"twenty five minutes",
    26:"twenty six minutes",
    27:"twenty seven minutes",
    28:"twenty eight minutes",
    29:"twenty nine minutes",
    30:"half"
  }

  //if less than or equal to thirty, use the above key value pairs to convert number into words
  if (m < 30 && m !== 0) {
    return minutes[m] + ' past ' + hours[h]


  } else if (m === 30) {
    return 'half past ' + hours[h]

  //if it's equal to 0, say it's whatever o'clock
  } else if (m === 0) {
    return hours[h] + " o'clock"

  //if greater than thirty, do the math to calculate how many minutes until the next hour
  } else if (m > 30) {
    return minutes[60 - m] + ' to ' + hours[h + 1]
  }


}

timeInWords(5, 47)
