// Create a function that merges two sorted arrays

// Create an empty array, take a  look at the smallest values in each input array
// Create a starting point for each array
// If the value in the first array is smaller than the value in the second array
// Push the value in the first array into our empty results array
// Move on to the next value in the first array
// if the value in the first array is larger than the value in the second array
// Push the value in the second array into our results and move on to the next value
// Once we reach to the end of one array, push remaining values from the other array

function mergeArrays(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0

  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
    while(i < arr1.length) {
      results.push(arr1[i])
      i++
    }
    while(j < arr2.length) {
      results.push(arr2[j])
      j++
    }
  }
  return results
}

mergeArrays([1, 2, 6, 9], [34, 60, 73])