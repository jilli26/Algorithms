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
