//document.getElementById("count-el").innerText=5

let count =0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){
    count+=1
    countEl.innerText=count
}

//we can use arrow function if single return statement is executed
//let save=()=>saveEl.innerText+=count+" - "
/*There is a problem with spaces by using innerText.
To solve it we can use innerHTML or textContent.
Googled : innertext alternative mdn */
function save(){
    saveEl.textContent+=count+" - "
    count=0
    countEl.innerText=count
}