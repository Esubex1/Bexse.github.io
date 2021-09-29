'use strict';
function clickToAdd(){
    let input = document.getElementById("input");
    let result = input.value;
    let outPut = document.getElementById("secInput");
    outPut.value = result;
   input.value = "";
            }

function addition(){
 let fVal = document.getElementById("firstValue");
 let sVal = document.getElementById("secondValue");
 let result = Number(fVal.value) + Number(sVal.value);
 alert(result);
 let p = document.createElement("p");
 p.innerHTML = result;
 document.body.append(p);

}

function multiplication(){
 let fVal =document.getElementById("firstValue");
 let sVal =document.getElementById("secondValue");
 let result = Number(fVal.value) * Number(sVal.value);
 alert(result);
 let p = document.createElement("p");
 p.innerHTML = result;
 document.body.append(p);
}

function substraction(){
 let fVal =document.getElementById("firstValue");
 let sVal =document.getElementById("secondValue");
 let result = Number(fVal.value) - Number(sVal.value);
 alert(result);
 let p = document.createElement("p");
 p.innerHTML = result;
 document.body.append(p);
}

