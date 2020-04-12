document.addEventListener('DOMContentLoaded', () => {
console.log("DOM fully loaded and paresed!");

//flag card options
const flagCardsArray = [

    {
        name: 'australia',
        img: 'images/australia.png'
    }, 
    {
        name: 'australia',
        img: 'images/australia.png'
    }, 
    {
        name: 'belgium',
        img: 'images/belgium.png'
    }, 
    {
        name: 'belgium',
        img: 'images/belgium.png'
    }, 
    {
        name: 'british-indian-ocean',
        img: 'images/british-indian-ocean-territory.png'
    }, 
    {
        name: 'british-indian-ocean',
        img: 'images/british-indian-ocean-territory.png'
    }, 
    {
        name: 'cuba',
        img: 'images/cuba.png'
    }, 
    {
        name: 'cuba',
        img: 'images/cuba.png'
    }, 
    {
        name: 'ethiopia',
        img: 'images/ethiopia.png'
    }, 
    {
        name: 'ethiopia',
        img: 'images/ethiopia.png'
    }, 
    {
        name: 'lebanon',
        img: 'images/lbanon.png'
    }, 
    {
        name: 'lebanon',
        img: 'images/lbanon.png'
    }
]

flagCardsArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
const cardsFound = []


//creating the board
function createBoard() {
    for (let i = 0; i < flagCardsArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/bg.jpg');
      card.setAttribute('id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card)
    }
  }

//check for match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const firstCardId = cardsChosenId[0];
    const secondCardId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        alert("A match is found! Yay");
        cards[firstCardId].setAttribute('src', 'images/white.jpg');
        cards[secondCardId].setAttribute('src', 'images/white.jpg');
        cardsFound.push(cardsChosen);
    } else {
        cards[firstCardId].setAttribute('src', 'images/bg.jpg');
        cards[secondCardId].setAttribute('src', 'images/bg.jpg');
        alert("Uh Oh! Try again");
    }

    //removing items in the array to start over
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsFound.length;
    if (cardsFound.length === flagCardsArray.length/2){
        resultDisplay.textContent = "Congratulations! You found all the cards!";
    }
}


//flip card if both are same
function flipCard(){
var cardId = this.getAttribute('id');
cardsChosen.push(flagCardsArray[cardId].name);
cardsChosenId.push(cardId);
this.setAttribute('src', flagCardsArray[cardId].img);
if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500);
    }
}

createBoard();
   

});