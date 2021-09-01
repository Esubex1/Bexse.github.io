'use strict'

const assert = require("assert");
const methods = require("./d13codeQuality.js");
//const isVowel = methods.isVowel;
//const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;
//const compoundInterest = methods.compoundInterest

// describe("computeSalesCommission",function(){
//     it("computeSalesCommission",function(){
        
//     })
// });
console.log(calcDownpayment);

//console.log("expect 65:",  computeSalesCommission(true, 300));
// describe("isVowel", function () {
//     it("a is vowel", function () {
//         assert.equal(isVowel("a"), true);
//     });
//     it("e is vowel", function () {
//         assert.equal(isVowel("e"), true);
//     });
//     it("i is vowel", function () {
//         assert.equal(isVowel("i"), true);
//     });
//     it("o is vowel", function () {
//         assert.equal(isVowel("o"), true);
//     }); 
//     it("u is vowel", function () {
//         assert.equal(isVowel("u"), true);
//     }); 
//     it("z is not vowel", function () {
//         assert.equal(isVowel("z"), false);
//     });
//     it("5 is not vowel", function () {
//         assert.equal(isVowel("5"), false);
//     });
// });



describe("calcDownpayment", function(){
    it("downpayment of a 40000 is 2000" , function(){
            
assert.equal(calcDownpayment(40000), 2000);
});

it("downpayment of a 50000 is 25000" , function(){
assert.equal (calcDownpayment(50000), 2500 );
});

it("downpayment of a 100000 is 7500" , function(){
assert.equal (calcDownpayment(100000), 7500);
});

it("downpayment of a 200000 is 22500" , function(){
assert.equal (calcDownpayment(200000), 22500)
});

});

// // console.log("expect 0: ", assert..equal(computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));
