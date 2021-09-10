"use strict"

module.exports = { groupById, unique, filterRangeInPlace, filterRange}; 
/**
 * 
 * @param {array} arr 
 * @param {number} a integer
 * @param {number} b integer
 * @returns 
 */
    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
      }
      
      /**
       * 
       * @param {array} arr 
       * @param {number} a is integer
       * @param {number} b is integer
       */
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];
    
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }
      
      }
      /**
       * 
       * @param {array} arr 
       */

  function unique(arr) {
   
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
      
 
/**
 * 
 * @param {object} array containing objects
 * @returns an object 
 */

  function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
    }
