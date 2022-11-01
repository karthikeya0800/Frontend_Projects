let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")
//localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
/*This is another method to activate the button. 
This method doesn't require onclick tag in html.*/

inputBtn.addEventListener("click",function(){
    //console.log("Button Clicked!")
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value=""
})

deleteBtn.addEventListener("dblclick", function(){
    myLeads=[]
    localStorage.clear()
    render(myLeads)
})

saveBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        //listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</li>"
        //Using template string/literal
        listItems+=`
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `
    }
    //innerHTML is capable of adding HTML in javascript
    ulEl.innerHTML=listItems
}

//Another method is below (use in for loop)
/*const li=document.createElement("li")
li.textContent=myLeads[i]
ulEl.append(li)*/
