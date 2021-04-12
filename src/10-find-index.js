/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let begin = 0;
  let end = array.length - 1;
  let middle;
  let index = false;
  while (index === false) {
    middle = Math.floor((begin + end) / 2);
    if (array[middle] > value) {
      end = middle - 1;
    } else if (array[middle] < value) {
      begin = middle + 1;
    } else if (array[middle] === value) {
      index = true;
    }
  }
  return middle;
}

module.exports = findIndex;
