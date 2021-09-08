'use strict';

/**
 * 
 * @param {*} initialValue initial value to start accumulation 
 * @param {*} increment increases the initial value;
 */

function Accumulator(initialValue, increment){

        this.currentValue = initialValue;
        this.acccumulate =  function (){
           return  this.currentValue +=  increment;
            }
        this.report = function(){
            return this.currentValue;
        }


    }
const accumulator = new Accumulator();
module.exports = {accumulator};




