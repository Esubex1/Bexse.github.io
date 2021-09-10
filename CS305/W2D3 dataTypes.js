'use strict';

module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam};

  /**
   * capitalize the first letter;
   */
function ucFirst(str){
      if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
/**
 * 
 * @param {string} str 
 * @returns check spam of strings
 */
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');

}
/**
 * 
 * @param {string} str 
 * @param {number} maxlength total number of truncate characters
 * @returns truncated words of maximum length
 */
function truncate(str, maxlength) {
      return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

/**
* 
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}
/**
 * 
 * @param {string} str 
 * @returns camelizd string
 */

function camelize(str) {
  return str
          .split('-').map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join('');

}