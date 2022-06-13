// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array,
// it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)

// Solve using multiple pointers
// Set first pointer at zero index and second pointer at 1st index
// Iterate over the array and compare item at first pointer with item at second pointer
// If the items match move the second pointer over 1 and continue
// If the items dont match move the first pointer over i++ and replace with second pointer item arr[i] = arr[j]
// If the array is empty return 0
// Finally return first pointer + 1

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      j++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
countUniqueValues([1, 2, 2, 5, 7, 7, 9])

//  i->
// [1, 2, 2, 5, 7, 7, 9]
//     j->
