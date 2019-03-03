/*
 * Create a list that holds all of your cards
 */

let deck = document.querySelector('.deck');

// console.log(listOfCards)
console.log(deck)

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Suffling cards

function shuffleCards() {
    const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
    // console.log(cardsToShuffle);
    const shuffledCards = shuffle(cardsToShuffle);

    // looping through the cards and adding them to the deck
    for(let shuffledCard of shuffledCards) {
        console.log('adding shuffled cards to deck');
        // shuffledCard.classList.add('show', 'open')
        deck.appendChild(shuffledCard)
    }

}

shuffleCards();



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



// Creating an event listener for each card on the deck

let cards = deck.querySelectorAll('.card');
let openedCards = []
// console.log(cards)

// showing and hiding cards
function toggleCards(cardToToggle) {
    cardToToggle.classList.toggle('open');
    cardToToggle.classList.toggle('show')
}

// adding openedCards to openedCards Array
function addToList(cardsToAdd) {
    if(cardsToAdd.classList.contains('open')) {
        openedCards.push(cardsToAdd)
        console.log(openedCards)
    }
}

for(let card of cards) {
    card.addEventListener('click', function(e) {
        toggleCards(card);
        if(openedCards.length < 2) {
            // console.log(openedCards.length)
            addToList(card)
        }
        // addToList(card)
    })
}


