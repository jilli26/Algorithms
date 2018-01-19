// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//
//   var newArr = []
//   //loop/iterate through the array
//   for (var i = 0; i < array.length; i++) {
//     //we need to know the last element in the array
//     const last = newArr[newArr.length - 1]
//     //get the last element from newArr and if it doesn't exist in the new array OR if it's equal to size (passed in as arg),
//     //then we need to start a new array chunk
//     if (!last || last.length === size) {
//       newArr.push([array[i]])
//     //else we need to just push in whatever array[i] is
//     } else {
//       last.push(array[i])
//     }
//   }
//
//   return newArr
// }

function chunk(array, size) {


}



module.exports = chunk;
