// start by picking the second element in the data structure.
// compare this element with the one before it and swap its positions if necessary.
// continue to the next element and if it’s not in the right position, it iterates through the “ordered half” to find its correct position and inserts it there.
// repeat the same process until the data structure is sorted.

const arr = [3,2,1,4,6,5,7,9,8,10]

function insertionSort(arr) {
  let currentVal
  
  for (let i = 0; i < arr.length; i++) {
      currentVal = arr[i]

      for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j+1] = arr[j]
      }
      
      arr[j+1] = currentVal
  }
  
  return arr
}

// quadratic O(n^2) complexity.
insertionSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]