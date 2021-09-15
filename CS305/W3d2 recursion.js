
"use strict";

module.exports = { sumTo, factorial, fib, outputList, outputListLoop, reverseList, reverseListLoop, copyArray, concat, findMin, combineObjs};
/**
 * 
 * @param {Number}  n is an integer
 * @returns sum of input integers
 */
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
 /**
  * 
  * @param {Number } n is a positive integer
  * @returns the factorial of positive numbers
  */

  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  /**
   * 
   * @param {Number} n is fibanocci number
   * @returns sum of the nth number
   */
 function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  /**
   * prints out the linked list recursively;
   */
  

  function outputList(list) {
    
    if (list.next) {
     console.log(list.next); 
    }
  
  }
  /**
   * prints out the linked list using iterative loop method
   */
  function outputListLoop(list) {
    let temp = list;
  
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  
  }
  /**
   * prints out the reveresed linked list using recursive method
   */
  function reverseList(list) {
  
    if (list.next) {
    reverseList(list.next);
    }
  
    console.log(list.value);
  }
  /**
   * prints out the reveresed linked list using iterative loop method
   */
  // tree (read)
  function reverseListLoop(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
/**
 * 
 * @param {array} arr is an array 
 * @returns copy of given array
 */

  function copyArray(arr){
    let newArray = [...arr];
    return newArray;

  }
  /**
   * 
   * @param {Array} arr1 is an array
   * @param {Array} arr2 is an array 
   * @returns new array from arr1 and arr2
   */
  function concat(arr1, arr2){
  let newArray = [...arr1, ...arr2];
  return newArray;
  }
  
  /**
   * 
   * @param  {number} numbers is given numbers
   * @returns  the minumum number of given numbers
   */
  function findMin(...numbers) {
    return Math.min(...numbers);
  
  }
  /**
   * 
   * @param {Object} obj1 is an object
   * @param {Object} obj2  is an object
   * @returns conbined objects from the given objects
   */
  function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};
  
  }

  function contains(tree,name){
    let match = false;
    if(tree.value===name)
        return true;
    if(Array.isArray(tree)){
        tree.forEach(function(item){
            if(item.value===name){
                match= true;
            }else if(!match && item.descendents.length>0)
            {
                match = containsRecursion(item.descendents,name);
            } 
        });

    }else if(tree.descendents.length>0){
        match= containsRecursion(tree.descendents,name);
    }
    return match;
}