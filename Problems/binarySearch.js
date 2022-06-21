// The function accepts a sorted array and a element
// Create a start pointer at the start of the array
// Create end pointer at the end of array
// Create middle pointer which is the average of start and end pointers
// While array at middle pointer(index) is not equal to element & start comes before end(less than or equal too)
// If the element is less than the middle, subtract 1 from end, move end pointer down
// Else move start pointer up by adding 1
// Add new middle, repeating average formula
// Return ternary, if array at middle is equal to the element return middle else return -1

function BinarySearch(arr, el) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) /2)

  while (arr[middle] !== el && start <= end) {
    if (el < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === el ? middle : -1
}

BinarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5)