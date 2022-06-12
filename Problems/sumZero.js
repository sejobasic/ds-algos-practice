// Write a function that finds the pair in a sorted array which equals 0
// Iterate over array once then iterate again to compare each element with one another
// If the elements sum up to 0 return the pair

// Non efficient solution o(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}
sumZero([-3, -2, -1, 0, 1, 2, 3])


// Solve using pointers
// Create left and right pointer
// left being the start of the array and right being the end
// Create a loop that compares the left and right pointer until a match is found
// If the sum is less than 0 then we add one to the left 
// If the sum is greater than 0 we add one to the right

// Efficient solution O(n)
function sumZero2(arr) {
  let left = arr[0]
  let right = arr.length - 1

  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

