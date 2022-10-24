var cards = document.querySelectorAll('.card');
let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target;

    if (clickedCard != cardOne) {
        clickedCard.classList.add('flip');

        if (!cardOne) {
            return cardOne = clickedCard;
        } else {
            console.log(cardOne);

            cardTwo = clickedCard;
            let cardOneImg = cardOne.querySelector('img').src,
                cardTwoImg = cardTwo.querySelector('img').src;


            matchCards(cardOneImg, cardTwoImg);
            

        }
    }

}
function matchCards(img1, img2) {
    if (img1 == img2) {
        cardOne.removeEventListener('click', flipCard)
        cardTwo.removeEventListener('click', flipCard)
        cardOne = '';
        cardTwo = '';
        return console.log('Card matched');
    } else {
        console.log('Not Mached');
        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');

            cardOne = '';
            cardTwo = '';
        }, 400);
        // setTimeout(() => {
        //     cardOne.classList.remove('vibration');
        //     cardTwo.classList.remove('vibration');
        // }, 800);
    }
    
}


cards.forEach(card => {
    card.addEventListener('click', flipCard);
});