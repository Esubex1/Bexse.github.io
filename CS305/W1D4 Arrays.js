'use strict';

 module.exports = {sum, multiply,maxOfThree, scoreExams, findLongestWord,reverseArrayInPlace,reverseArray};

   
/**
 * Takes three numbers as arguments and returns the largest of them
 * @param {Number} num1 integers
 * @param {Number} num2 integers
 * @param {Number} num3 integers
 * @returns largest of three numbers;
 */

function maxOfThree(num1, num2, num3){
    let max = 0;
    if ((num1 >= num2) && (num1 >= num3)){
       max = num1
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
  
   return max;
}
/**
 * 
 * @param {array} array is array of numbers
 * @returns sum of array elements
 */

function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result+= array[i];
    }
return result;
}

/**
 * 
 * @param {Array} arr is array of numbers
 * @returns product of array elements
 */
function multiply(arr){
    let multiple = 1;
    for (let i = 0; i < arr.length; i++){
        multiple*= arr[i];
    }
    
    return multiple;
}
/**
 * 
 * @param {Array} arr is an array of strings
 * @returns longest word length
 */
function findLongestWord(arr){
    let longestWord = arr[0];

    for (let i = 0; i< arr.length; i++){

        if(arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
        
    }

    return (longestWord.length);
}
/**
 * 
 * @param {*} arr array  
 * @returns reversed new array
 */
 function reverseArray(arr){
let newArray = [];
for (let i = arr.length -1; i > -1; i--){
    newArray.push(arr[i]);
}
   return newArray;
}
/**
 * 
 * @param {*} arr array 
 * @returns reversed orginal array
 */

 function reverseArrayInPlace(arr){
 
  let i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
  return arr;
}
// 
/**
 * 
 * @param {*} b array of array elements  
 * @param {*} c array 
 * @returns an array 
 */


function scoreExams(b, c) {
let score = [];
for (let i = 0; i < b.length; i++){
     let count = 0;
    for (let j = 0, k =0;  j < b[i].length; j++, k++ ){
          if(b[i][j] === c[k] ) {
            count++;
            continue;
        }

    }
score.push(count);

}
return score;
}




























