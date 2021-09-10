"use strict"

module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
      }
      
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];
    
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }
      
      }

  

  function unique(arr) {

    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
      
      let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
  }


  function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
    }
