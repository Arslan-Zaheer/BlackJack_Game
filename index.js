
let cards_arr = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("heading-main-round")
let sumEl = document.querySelector("#heading-main-sum")
let cardsEl = document.querySelector("#heading-main-cards")

let playerEl = document.getElementById("player-chips")
let player = {
    name: "Arslan",
    chips: 100
}

playerEl.textContent = player.name + ": $" + player.chips


function startGame(){

isAlive = true
hasBlackJack = false
let firstCard = randomNumber()
let secondCard = randomNumber()
cards_arr = [firstCard,secondCard]
sum = firstCard + secondCard
    
    renderGame()
}

function randomNumber(){
    let random_num = Math.floor(Math.random()*13) + 1

    if(random_num > 10){
        return 10
    }else if(random_num === 1){
        return 11
    }else{
        return random_num
    }
 
}


function renderGame(){
   
    cardsEl.textContent = "Cards: "
    for(let i = 0;i<cards_arr.length;i++){
        cardsEl.textContent += cards_arr[i] + " "    
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You're out of the game! 😭"
    }
    messageEl.textContent = message
    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = randomNumber()
    cards_arr.push(card)
    sum += card
    renderGame()
    }
    

}

