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




form.addEventListener('submit', (e) => {
    
const email= document.getElementById('email')
const fname = document.getElementById('firstName')
const lname = document.getElementById('lastName')
const password = document.getElementById('password')
const reTypepassword = document.getElementById('retypepassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
    
    
  let messages = []
  if(email.value==='') {
      message.push("Please enter a valid email address")
  }
  if (fname.value === '' || fname.value == null) {
    messages.push('First Name is required')
  }
  if (lname.value === '' || lname.value == null) {
    messages.push('Last Name is required')
  }
  
  if (password.value.length < 8) {
    messages.push('Password must be longer than 8 and less than 14 characters')
  }

  if (password.value.length > 14) {
    messages.push('Password must be less than 14 characters')
  }

  if (password.value != reTypepassword.value ) {
    messages.push("Passwords Don't match")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})


