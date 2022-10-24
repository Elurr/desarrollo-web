const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheesburger',
        img: 'images/cheesburger.png',
    },
    {
        name: 'hotdod',
        img: 'images/hotdog.png',
    },
    {
        name: 'iceCream',
        img: 'images/icecream.png',
    },
    {
        name: 'milkShake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheesburger',
        img: 'images/cheesburger.png',
    },
    {
        name: 'hotdod',
        img: 'images/hotdog.png',
    },
    {
        name: 'iceCream',
        img: 'images/icecream.png',
    },
    {
        name: 'milkShake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

//For create the random element of Array
cardArray.sort(() => 0.5 - Math.random());

const resultDisplay = document.querySelector('#result');

//Search into the HTML and Find the grid div
const gridDisplay = document.querySelector('#grid');


const cardsChosen = [];
const cardsChosenIds = [];
const cardWon = [];

//To create the Board content of the array
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        //create Element that is img
        const card = document.createElement('img');
        //set attribute and sources
        card.setAttribute('src', 'images/blank.png');
        //set attribute ID
        card.setAttribute('data-id', i);
        //for call the function flipCard
        card.addEventListener('click', flipCard);
        //add array Element to the div
        gridDisplay.appendChild(card);

    }

}
createBoard();


function checkMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        alert('You Click the same card');
    }
    
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a Match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry Again');
    
    }
    resultDisplay.textContent = cardWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardWon.length == cardArray / 2) {
        resultDisplay.textContent = 'Congratulations you find them all';
    }

}
//for flip card
function flipCard() {
    
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
   
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}



