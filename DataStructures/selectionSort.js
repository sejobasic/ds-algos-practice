// Store the first item of the data structure as the minimum value.
// Iterate through the data structure comparing each value with the minimum value. 
// If a smaller value is found, it identifies this value as the new minimum value.
// If the minimum value isn’t the first value of the data structure
// it swaps the positions of the minimum value and the first value.
// It repeats this iteration until the data structure is ordered.

const arr = [3,2,1,4,6,5,7,9,8,10]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
            lowest = j
        }
    }

    if (i !== lowest) {
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
  }
}
// quadratic – O(n^2) complexity.
selectionSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]