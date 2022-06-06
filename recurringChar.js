// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Find the first recurring character
// It should return 2

// Practical non efficient solution
// Compare each number in the array using nested loop
// if no recurring return undefined
function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
} // O(n^2)
firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])

// Solution using hash map
// Create an object that keeps track of items in array
function firstRecurringChar2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined
} // O(n)
firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4])
