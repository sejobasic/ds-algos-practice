// This function has a space complexity O(1)
function uselessFunction(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('Hello!')
  }
}
// When talking about space complexity we dont normally care how big the input is
uselessFunction([1,2,3,4,5])

// This function has a space complexity O(n)
// We are creating a new data structure (the array)
// We add memory to the data structure so each item is an additional memory space on our computer
function arrayOfHi(n) {
  let hiArray = []
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = 'hi'
  }
}

arrayOfHi(6)