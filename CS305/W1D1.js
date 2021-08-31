'use strict';
let prompt = require('prompt-sync')();


// let isSalaried = prompt("Are you a salaried salesman? ");

// let salesAmount = parseFloat(prompt("please enter a sales amount"));

// let rate,  commission;

// //if not salaried and  salaries <300;
//      if (isSalaried === "yes") {
//      if(salesAmount < 300){
//         rate = 0.0;
//      }

//      else if(salesAmount < 500){
//         rate = 0.01;
//      }

//      else {
//          rate = 0.02;
//      }

//     }
//     else { 
//         if(salesAmount < 300){
//             rate = 0.0; 
//         }
//         else if (salesAmount < 500) {
//             rate = 0.02;
//         }
    //     else {
    //         rate = 0.03
    //     }
    // }
    
    // commission = salesAmount * rate; 

    // console.log(commission);
    
//     let age;
//     do {
//         age = prompt("how old are you?")

//     } while(age < 18){

//         console.log("exiting...")
//     }
// // 


    // 

    //    while( true){
    //    let age = prompt("how old are you? ")
    //         if(age > 18) break;
    //              }
    //   console.log ("exiting...");

//balance of saving account;

//     let initialAmount = parseFloat(prompt(" initial amount ?"))
//     let annualInterestRate = (parseFloat(prompt(" what is your annul interest rate?")) / 100);
//     let numYears = parseInt(prompt(" number of years ?"));
//     let numMonths = numYears * 12;
//     let monthlyRate = annualInterestRate / 12;
    
//     for(let month = 1; month <= numMonths; month++){
//         let interest = initialAmount * monthlyRate;
//         interest = Math.round(interest * 100) / 100;
//         initialAmount += interest;

//     }
// console.log(initialAmount);
    
//rectangular pattern;

// for(let i = 1; i <= 5; i++){
//     let pattern  = "";
//     for (let j = 1; j <= 5; j++){
//         pattern += j;
//     }

//     console.log(pattern);
// }

// for(let i = 1; i <= 5; i++){
//     let pattern  = "";
//     for (let j = 1; j <= i; j++){
//         pattern += i;
//     }

//     console.log(pattern);
// }

// for(let i = 5; i >=1; i--){
//     let pattern  = "";
//     for (let j = 1; j<=i ; j++){
//         pattern += i;
//     }

//     console.log(pattern);
// }


// let cost = parseInt(prompt('Enter cost of house'));
// let downPayment;

// if(cost < 50000){
//    downPayment = 0.05 * cost;
 
//  }
//  else if (cost < 100000){
//     downPayment = 1000 + 0.1 * (cost - 50000);
//  }
//  else if (cost < 200000){
//     downPayment = 2000 + 0.15 * (cost - 100000);
//  }
//  else{
//      downPayment = 5000 + 0.1 * (cost - 200000);
//  }

//  console.log(downPayment);



let digits = prompt("please enter a digit here");
let sum = 0;
let num = digits.toString();
for (let i = 0; i< num.length; i++){
    let outPut = parseInt(num[i]);
    sum+= outPut;
    
}
console.log(sum);

// // or 
// let sum = 0;
// while(num > 0){
//     let remainder = num % 10;
//     sum+= remainder;
//     n = Math.floor(n/10);

// }
// //console.log(sum); */