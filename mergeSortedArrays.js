// Given 2 arrays that are sorted
// Merge the 2 arrays into one array that is sorted

// Long not efficient solution
function mergeArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1
  let j = 1

// Check input to make sure both are arrays and both contain items
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }
  while(arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = array1[1];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}





mergeArrays([0, 1, 2, 3], [4, 5, 6, 7]);