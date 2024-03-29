// Given 2 arrays, create a function that
// lets a user know (true/false) whether
// these two arrays contain any common items

// For example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z','y','x']
// should return true

// 2 parameters - arrays - no size limit
// return true or false

// O(n^2)

const arr1 = ['a', 'b', 'c', 'x']
const arr2 = ['z','y','x']

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(a*b)
// O(1) - Space Complexity
containsCommonItem(arr1, arr2)

// --------------------------------------------------------

// Better approach
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z','y','x']

// array1 ==> obj {
// a: true
// b: true
// c: true
// x: true
// }
// Now we can use this object to check each item in array2 
// to see if each item exists
// array2[index] === obj.properties

function containsCommonItem2(array1, array2) {
  // create an object and loop through our first array
  // where properties === item in the array
  // loop through second array and check if item in 
  // second array exists in the created object
  let map = {}
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i]
      map[item] = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false
}
// O(a + b) - Time Complexity
// O(a) - Space Complexity


// Cleaner solution Solving using methods
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
