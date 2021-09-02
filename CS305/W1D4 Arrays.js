'use strict';

 module.exports = {sum, multiply,maxOfThree, scoreExams, findLongestWord};
 //, 
   
// //Question #1

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


// console.log(maxOfThree(1, 5, 50));

function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result+= array[i];
    }
return result;
}

function multiply(arr){
    let multiple = 1;
    for (let i = 0; i < arr.length; i++){
        multiple*= arr[i];
    }
    
    return multiple;
}

function findLongestWord(arr){
    let longestWord = arr[0];

    for (let i = 0; i< arr.length; i++){

        if(arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
        
    }

    return (longestWord.length);
}
// console.log(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));

//  function reverseArray(arr){
// let newArray = [];
// for (let i = arr.length -1; i > -1; i--){
//     newArray.push(arr[i]);
// }
//    return newArray;
// }


// function reverseArrayInPlace(arr){

//     let arr = [1, 2, 3, 4, 5, 6, 7];
//     let n = arr.length-1;
    
//     for(let i=0; i<=n/2; i++) {
//       let temp = arr[i];
//       arr[i] = arr[n-i];
//       arr[n-i] = temp;
//     }
//     console.log(arr)
//     return arr;
// }
// function scoreExams(studentArray, keyarray){

//     let score = [];
//     let count = 0; 
//     //compare the key with the array
// for (let i = 0, k = 0; i< studentArray.lenght, k < keyarray.lenght; i++, k++){

//     for (let j = 0;j < studentArray.length; j++) {
// keyarray[k] = studentArray[i][j]

//     }
// }


//     count each correct answer
//     push the correct answers to returned value;

// score.push(count)

// return score;
// }

// function sumDimension (matrix){
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++) {

//         sum += (matrix[i][j]); 
        
//         }

//     }
    
// return sum;
// }

// let consolee = [[1,2,3], [4,5,6], [1,2]];

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

//console.log(scoreExams ([[1,1, 2,4], [2, 1, 2, 2], [3,1, 3,4]], [3,1, 2, 4]));



// function sum(a){
//     let newresult = [];
// let sum =0;
// for (let element of matrix){
//     console.log(element);

// for(let innerElement of element){
//     //console.log(innerElement);
//     sum = sum + innerElement;
// }

// newresult.push(sum);
//     console.log(sum);
// }

// return newresult;
// }

// let matrix = [[1, 2, 3], [4,5,6], [7,8,9]];
// let value =sum(matrix);
// console.log(value);


























