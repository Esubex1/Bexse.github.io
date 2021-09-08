'use strict';


const bank = {
    
        transactionsDB: [
                        {customerID:1, customerTransaction:[10, 60, -40]},
                        {customerID:2, customerTransaction:[10, 10, -10]},
                        {customerID:3, customerTransaction:[5, -5, -55]}],
    
       debit: function (id, amount){
           const balance = this.getBalance(id);
           if(amount > balance && amount > 0){
            this.saveTransaction(id, -amount);
           }
           
       },
    
       credit:function (id, amount){
           amount = Math.abs(amount);
           this.saveTransaction(id, amount);
    
       },
    
       getBalance: function(id) {
           const customer = this.transactionsDB.find(customer => customer.customerID === id);
          let balance = 0;
           for(const item of customer.customerTransaction){
            balance += item;
           }
         
          return balance;
    
       },
    
       saveTransaction:function(id, amount){
           const customer = this.transactionsDB.find(customer => customer.customerID === id);
        customer.customerTransaction.push(amount);
        },
    
       getBankBalance:function(id){
           let totalBalance = 0;
           for (const customer of this.transactionsDB){

            for (const element of customer.customerTransaction){
            totalBalance+=element;
           }
    
       }

       return totalBalance;
    }
}

module.exports = {bank };


console.log("total balance should be 85: ", bank.getBankBalance());
bank.credit(1, 20);
bank.debit(1, 1000);
console.log("total should now be 105: ", bank.credit());