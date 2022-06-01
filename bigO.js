// O(n) EXAMPLES

function funChallenge(input) {
  let a = 10 // O(1) runs once
  a = 50 + 3 // O(1) runs once

  for (let i = 0; i < input.length; i++) { // O(n) runs in a loop, linear time
    anotherFunction() // O(n)
    let stranger = true // O(n) runs as many times as loop
    a++ // O(n) runs as many times as loop
  }
  return a // O(1) runs once
}
// 3 + n + n + n + n how many operations
// our Big O is O(3 + 4n)
// simplified to O(n)


function anotherFunChallenge(input) {
  let a = 5; // O(1) constant
  let b = 10; // O(1) constant
  let c = 50; // O(1) constant
  for (let i = 0; i < input; i++) { 
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { 
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// 4 + n + n + n + n + n 
// O(4 + 5n)
// O(4 + 5n or 7n)(only if we include the increment i++ and j++) still it is O(n)

