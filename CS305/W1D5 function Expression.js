"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap}; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(num){
    return (num * 2)
    
}

/**
 * @returns {number} 100 times the input
 */
 function times100(num){
     return (num * 100);
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func){
    let newArray = [];
   for  (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
      
   }
    return newArray;
}


// function myMap (arr, 
//     function (num) {
//         return num *3;
//     };
//         )

// //anonymous function 
// function (num){
//     return num *3;
// }

// // let y = function(num){
// //     return num *3;
// // }; 

// // an arrow expression
//  let y = (num) => num * 3;





