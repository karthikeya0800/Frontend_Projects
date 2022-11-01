let num1=document.getElementById("num1-el");
let num2=document.getElementById("num2-el");
let resEl=document.getElementById("res-el")

//Trying arrow function 😉
let add=()=>resEl.innerHTML=parseFloat(num1.value)+parseFloat(num2.value);

function subtract(){
    resEl.innerHTML=" "+num1.value-num2.value;
}

function multiply(){
    resEl.innerHTML=num1.value*num2.value;
}

function divide(){
    resEl.innerHTML=num1.value/num2.value;
}