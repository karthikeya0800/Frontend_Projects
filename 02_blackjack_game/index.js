let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
//let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");

let player={
    name:"Karthik",
    cash:1000
}

let playerEl=document.getElementById("player-el")
playerEl.innerHTML=player.name + ": $"+player.cash
function startgame(){
    isAlive=true
    hasBlackJack=false
    let firstCard=getRandom()
    let secondCard=getRandom()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    rendergame()
}

function rendergame(){
    sumEl.innerHTML="Sum: "+sum
    cardsEl.innerHTML="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.innerHTML+=cards[i]+" "
    }
    if (sum<21){
        message="Do you want to draw a new card?"
    }else if (sum===21){
        message="You've got Blackjack!".fontcolor("#33cc33").fontsize("5px")
        hasBlackJack=true
    }else{
        message="You're out of the game!".fontcolor("#ff1a1a").fontsize("5px")
        isAlive=false
    }
    messageEl.innerHTML=message
}

function newcard(){
    if(isAlive && !hasBlackJack){
         let card=getRandom()
         sum+=card
         cards.push(card)
         rendergame()
    }
}

function getRandom(){
    let x=Math.floor(Math.random()*13)+1
    if (x===1){
        return 11
    }else if(x>10){
        return 10
    }
    return x
}