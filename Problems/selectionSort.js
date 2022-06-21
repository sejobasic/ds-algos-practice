// Store the first item as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller item
// If a smaller item is found, designate that smaller number to be the new minimum
// If the minimum is not the value(index) you initially began with, swap the two values
// Repeat this with the next item until the array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }
  return arr
}
selectionSort([34, 22, 10, 19, 17])