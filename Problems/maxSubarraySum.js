// Sliding Window
// Write a function called maxSubarraySum 
// Which accepts an array of integers and a number called num
// the function should calculate the maximum sum of num consecutive elements in the array

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) = 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) = 17


// Non efficient approach O(n^2)
// Account for negative numbers create variable max that equals -Infinity
// If the number is larger than the array return null
// Loop starting at zero and go up to the end of the array where the last set stops arr.length - num + 1
// Create a temp variable that stores our sum each time
// If temp is larger than our current max then update max
// Return max


function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for (j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// Time Complexity - O(n) Solution
// Sum the first set of items in the array and keep the total in max loop once
// Start another loop where num left off
// Take temp var and add the number from the second loop and then subtract 
// Update max sum if temp sum is larger
// Return max


function maxSubarraySum2(arr, num) {
  if (arr.length < num) {
    return null
  }

  let max = 0
  let temp = 0
  for (let i = 0; i < num; i++) {
    max += arr[i]
  }
  temp = max
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    max = Math.max(max, temp)
  }
  return max
}
maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
