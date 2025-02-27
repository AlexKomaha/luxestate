let isFlipped = false;

function flipCard() {
    const card = document.getElementById('flashcard');
    if (isFlipped) {
        card.classList.remove('flipped');
    } else {
        card.classList.add('flipped');
    }
    isFlipped = !isFlipped;
}

function prevCard() {
    alert("Previous card functionality not implemented yet!");
}

function nextCard() {
    alert("Next card functionality not implemented yet!");
}
