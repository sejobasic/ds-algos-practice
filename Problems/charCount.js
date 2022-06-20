// Write a function that takes in a string and returns counts of each character in the string.

// Make object to store and return at end
// Loop over string, for each character...
// If the char is a number/letter and is a key in object add one to count.
// If the char is a number.letter and not in object, add it to object and set value to result
// Return result object

function charCount(str) {
  let result = {}

  for (char of str) {
    char = char.toLowerCase()
    if (result[char] > 0) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}