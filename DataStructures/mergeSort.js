// Recursively break up the data structure into halves 
// until each “piece” has only one value.
// Then recursively merge the pieces in a sorted way 
// until it gets back to the length of the original data structure.

const arr = [3,2,1,4,6,5,7,9,8,10]

// Merge function
function merge(arr1, arr2) {
  const results = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
        results.push(arr1[i])
        i++
    } else {
        results.push(arr2[j])
        j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort(arr)) // [1,2,3,4,5,6,7,8,9,10]