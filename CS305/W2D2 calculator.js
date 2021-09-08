"use strict";

/**
 * Calculator constructor 
 */
function Calculator(){
    this.setValues = function (a, b){
        this.a = a;
        this.b = b;
    },
    this.sum = function (){
        return this.a + this.b;

        },
    this.mul = function (){
        return this.a + this.b;
        }

}
const calculator = new Calculator();
module.exports = {calculator };


;
