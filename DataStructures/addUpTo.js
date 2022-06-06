// Write a function that calculates the sum of all numbers from 1
// up to and including n

// First solution
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

// Second solution 6 * (6+1) / 2
function addUpTo(n) {
  return n * (n + 1) / 2
}

console.log(addUpTo(6))