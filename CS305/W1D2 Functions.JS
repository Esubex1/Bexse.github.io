"use strict";
//Question #1

function computeSalesCommission(isSalaried, salesAmount) {
  let rate, salesCommission;

  if (isSalaried) {
    if (salesAmount < 300) {
      rate = 0.0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      rate = 0.01;
    } else {
      rate = 0.02;
    }
  } else {
    if (salesAmount < 300) {
      rate = 0.0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      rate = 0.02;
    } else {
      rate = 0.03;
    }
  }
salesCommission = salesAmount * rate
  return  salesCommission;
}

//Function calls
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
//console.log("expect 65:",  computeSalesCommission(true, 300));

//Question #2

function compoundInterest(initialAmount, annualInterestRate, numYears) {
  let numMonths = numYears * 12;
  let monthlyRate = annualInterestRate / 12;
  // linitialAmount
  // annualInterestRate
  //  numYears

  for (let month = 1; month <= numMonths; month++) {
    let interest = initialAmount * monthlyRate;
    interest = Math.round(interest * 100) / 100;
    initialAmount += interest;
  }

  return initialAmount;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));


//Question #3

function calcDownpayment(cost){
let downPayment;

if(cost < 50000){
   downPayment = 0.05 * cost;
 
 }
 else if (cost < 100000){
    downPayment = 2500 + 0.1 * (cost - 50000);
 }
 else if (cost < 200000){
    downPayment = 7500 + 0.15 * (cost - 100000);
 }
 
 else{
     downPayment = 5000 + 0.1 * (cost - 200000);
 }

return downPayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));

//Question #4

function convertFahrenheit(temp) {
  let tempIncelsius = (5 / 9) * (temp - 32);

  return tempIncelsius;
}

console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));


//Question #5

function sumDigits(num){
  let sum = 0;
  while (num > 0){
      
      let value = num % 10;
      sum+= value;
      num = parseInt(num / 10);
  }

  return sum;
}

function multDigits(num){
  let product = 1; 
  while (num > 0){
      let value = num % 10;
      product *= value;
      num = parseInt(num / 10);
  }

  return product;
}


//Question #6

function calcDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return distance;
}

console.log("expect 5 : ", calcDistance(0, 0, 5, 5));
