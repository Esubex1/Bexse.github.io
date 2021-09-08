"use strict";

const assert = require("assert");  
const myExports = require("./W2D2 accumulator.js"); 
const accumulator = myExports.accumulator;   


describe("accumulator", function () {
    it("checks initialValue and increment", function () {
         const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.currentValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });
    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.currentValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    
    it("checks report", function () {
       const  accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.report(), 5);
    });    
});