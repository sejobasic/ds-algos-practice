// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// create an empty array to store the pairs
// Compare each number in the array with one another to find the pair
// If the compared numbers are equal to the target
// add the pairs to the empty array and return array

// Brute force non efficient approach O(n^2)
function twoSum(nums, target) {
  let indices = []
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              indices.push(i, j)
          }
      }
  }
  return indices
};

twoSum([2, 7, 11, 15], 9)

// Hash map approach O(n)
// iterate and insert elements into hash map
// check if the current elements complement (target - x) already exists in the map
// if it exists we have found our solution and return the indices
function twoSumHash(nums, target) {
  let map = new Map;
  for (var i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
      map.set(nums[i], i);
  }
};
twoSumHash([2, 7, 11, 15], 9)