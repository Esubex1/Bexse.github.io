"use strict";

module.exports = { topSalary,  doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; 
/**
 * 
 * @param {*} salaries 
 * @returns returns top-paid person;
 */
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

 /**
  * 
  * @param {array} arr 
  * @returns double each element of the array
  */
 
  function doubleNums (arr){
    return arr.map(item => item * 2);
  }
/**
 * 
 * @param {Array} arr 
 * @returns doubles each element (age) of an array 
 */
  function doubleAges (arr){
    return arr.map(item => item['age'] * 2);
  }
  
 /**
  * 
  * @param {Array} arr is an array ;
  *//** */
  
function filterEven (arr){
    return arr.filter(item => item % 2 === 0);

}

/**
 * 
 * @param {Array} arr is an array parameter
 * @returns age greater than 10
 */
function filterOver10 (arr){
 return arr.filter(item => item['age'] > 10);

}
/**
 * 
 * @param {Array} arr 
 * @returns  even numbers of the array;
 */
 function findEvenNum(arr){
    return arr.find(item => item % 2 === 0);
 }
  /**
   * 
   * @param {*Array} arr 
   * @returns  Even number of elements (age);
   */
 function findEvenAge(arr){
    return arr.find(item => item ['age'] % 2 === 0);
 }
  