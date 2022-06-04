// Create a function that reverses a string

// First solution
function reverse(str) {
// check input to see if its string
  if (!str) {
    return 'not a string';
  }
  const reversed = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}
reverse('Hello')

// Second solution
// Split the string into an array
// Reverse the items in the array
// Join the items on a string
function reverse2(str) {
  return str.split('').reverse().join('')
}
reverse2('hello')

// Third solution using arrow function
const reverse3 = str => str.split('').reverse().join('')