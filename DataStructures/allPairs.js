// Log all pairs of array
// Loop through first iteration then grab boxes again with a nested loop

const boxes = ['a', 'b', 'c', 'd', 'f']

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for ( let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}
logAllPairs(boxes)
// The big o is O(n^2)
// Because when loops are nested we multiply the operations so O(n * n)
// O(n^2) is very slow