
'use strict'

const assert = require("assert");
const methods = require("./d13codeQuality.js");
//const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;
const compoundInterest = methods.compoundInterest

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
//console.log(computeSalesCommission);


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

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
         assert.strictEqual(computeSalesCommission(true, 200), 0);
    });

    it("tests not salaried and 200 sales", function(){
         assert.strictEqual(computeSalesCommission(false, 200), 0);
    });

    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });

    it("tests not salaried and 300 sales", function(){
      assert.strictEqual(computeSalesCommission(false, 300), 6);
    });

    it("tests salaried and 3500 sales", function(){
      assert.strictEqual(computeSalesCommission(true, 3500), 70);
    });

    it("tests not salaried and 3500 sales", function(){
      assert.strictEqual(computeSalesCommission(false, 3500), 105);
    });
});

    describe("test of compoundInterest", function (){
        it("100 initial deposit after  1 year at rate of 0.01 is tests 1444176 ", function (){
            assert.equal(compoundInterest(100, 10, 1), 100.47);
        })

        it("1000 initial deposit after  5 year at rate of 0.01 is 16470 ", function (){
            assert.equal(compoundInterest(1000, 5, 0.1), 100.47);
        })
    })
    
