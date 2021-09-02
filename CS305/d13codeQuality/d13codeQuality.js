      "use strict";

    module.exports={computeSalesCommission, compoundInterest, 
                        calcDownpayment,convertFahrenheit,calcDistance };


      /**
       * Returns sales commission
       * @param {boolean} isSalaried is true if salaried and false if not;
       * @param {*} salesAmount is a positive integer;
       * @returns salescommission
       */
      /**
      
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
          
      /**
       * 
       * @param {Number} initialAmount is an integer;
       * @param {Number} annualInterestRate is a positive integer;
       * @param {Numnber} numYears is a postive number;
       * @returns balance of initial amount after numbers of years
       */
      
      function compoundInterest(initialAmount, annualInterestRate, numYears) {
        let numMonths = numYears * 12;
        let monthlyRate = annualInterestRate / 12;
       
      
        for (let month = 1; month <= numMonths; month++) {
          let interest = initialAmount * monthlyRate;
          interest = Math.round(interest * 100) / 100;
          initialAmount += interest;
        }
      
        return initialAmount;
      }
      
      /**
       * 
       * @param {number} cost is a positve number
       * @returns downpayment
       */
      
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
      /**
       * 
       * @param {Number} temp an integer
       * @returns temperature in celsius
       */
      
      function convertFahrenheit(temp) {
        let tempIncelsius = (5 / 9) * (temp - 32);
      
        return tempIncelsius;
      }
         /**
          * 
          * @param {number } x1 is an integer
          * @param {number } y1 is an integer
          * @param {number } x2 is an integer
          * @param {*numbe } y2 is an integer
          * @returns distance of coordinates
          */       
              
      
      function calcDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      
        return distance;
      }
      
      

