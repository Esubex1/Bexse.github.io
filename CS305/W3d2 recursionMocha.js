"use strict";

const assert = require("assert"); 
const myExports = require("./W3d2 recursion.js");
const sumTo = myExports.sumTo;  
const factorial = myExports.factorial; 
const fib = myExports.fib; 
const outputList = myExports.outputList; 
const outputListLoop = myExports.outputListLoop; 
const reverseList = myExports.reverseList; 
const reverseListLoop = myExports.reverseListLoop; 
const copyArray = myExports.copyArray; 
const concat = myExports.concat; 
const findMin = myExports.findMin; 
const combineObjs = myExports.combineObjs; 



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.strictEqual(sumTo(5), 15);
        assert.strictEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(10), 3628800);
    });

    it("tests fibonacci 10", function () {
        assert.strictEqual(fib(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(fib(30), 832040);
    });
    it("recursive version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputList(list), "1 2 3 4 printed to console");
    });
    it("iterative version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputListLoop(list), "1 2 3 4 printed to console");
    }); 

    it("recursive version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseList(list), "4 3 2 1 printed to console");
    });    
    it("loop version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseListLoop(list), "4 3 2 1 printed to console");
    });    

});


describe("spread operator tests", function () {
    it("tests clone array", function () {
        const oldArr = [1, 2, 3];
        const newArr = copyArray(oldArr);
        assert.deepEqual(newArr, oldArr);
        oldArr.push[4];
        assert.deepEqual(oldArr, [1, 2, 3]);
    });

    it("tests concatenate arrays", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        assert.deepEqual(concat(arr1, arr2), [1, 2, 3, 4, 5, 6]);
    });

    it("tests Math.min", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6, 7, 8, 0];
        assert.strictEqual(findMin(...arr1), 1);
        assert.strictEqual(findMin(...arr2), 0);
    });

    it("tests combine objects", function () {
        const obj1 = {prop1: 1, prop2: 2};
        const obj2 = {prop3: 1, prop4: 2};

        assert.deepEqual(combineObjs(obj1, obj2), {prop1: 1, prop2: 2, prop3: 1, prop4: 2});
    });


});