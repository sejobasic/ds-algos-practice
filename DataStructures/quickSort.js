// Identify the pivot value and place it in the index it should be.
// Recursively execute the same process on each “half” of the data structure.
// Suppose pivot is x[10] = 5
// Divide array into two different halves around the pivot value < 5 and > 5
// Sort both halves recursively

const arr = [3,2,1,4,6,5,7,9,8,10]

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start+1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex-1)
    quickSort(arr, pivotIndex+1, right)
  }
  return arr
}
// O(n log n) complexity.
console.log(quickSort(arr)) // [1,2,3,4,5,6,7,8,9,10]
