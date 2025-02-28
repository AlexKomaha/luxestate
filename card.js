const card = document.querySelector('.card__inner');
const frontText = document.querySelector('.card__face--front p');

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');

  if (card.classList.contains('is-flipped')) {
    frontText.textContent = "To lower, to unload";
  } else {
    frontText.textContent = "降ろす";
  }
});

function prevCard() {
    alert("Previous card functionality not implemented yet!");
}

function nextCard() {
    alert("Next card functionality not implemented yet!");
}
