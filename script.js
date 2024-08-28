const images = [
  "cat1.jfif",
  "https://m.media-amazon.com/images/I/51ICUAndDnL._AC_UF894,1000_QL80_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51zUTUX64WL._AC_UL600_SR600,600_.jpg",
  "	https://m.media-amazon.com/images/I/51BEd3UDR1L.jpg",
  "https://m.media-amazon.com/images/I/51jcYl6B6EL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61yP0ZE8n8L._AC_UF350,350_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51raUPVSNWL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51UHibGa3NL._AC_UF350,350_QL80_.jpg",
  "cat1.jfif",
  "https://m.media-amazon.com/images/I/51ICUAndDnL._AC_UF894,1000_QL80_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51zUTUX64WL._AC_UL600_SR600,600_.jpg",
  "	https://m.media-amazon.com/images/I/51BEd3UDR1L.jpg",
  "https://m.media-amazon.com/images/I/51jcYl6B6EL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61yP0ZE8n8L._AC_UF350,350_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51raUPVSNWL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51UHibGa3NL._AC_UF350,350_QL80_.jpg",
];

let firstCard, secondCard;
let matchedPairs = 0;
const totalPairs = images.length / 2;
const gameContainer = document.getElementById("gameContainer");
const message = document.getElementById("message");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(image) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.image = image;

  const img = document.createElement("img");
  img.src = image;
  card.appendChild(img);

  card.onclick = flipCard;
  return card;
}

function setupGame() {
  gameContainer.innerHTML = "";
  shuffle(images);

  images.forEach((image) => {
    const card = createCard(image);
    gameContainer.appendChild(card);
  });

  matchedPairs = 0;
  message.textContent = "";
  firstCard = secondCard = null;
}

function flipCard() {
  if (this === firstCard || this.classList.contains("flipped")) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;

    if (firstCard.dataset.image === secondCard.dataset.image) {
      matchedPairs++;
      firstCard = secondCard = null;

      if (matchedPairs === totalPairs) {
        window.alert("you won");
        setTimeout(() => {
          setupGame();
        }, 1000);
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = secondCard = null;
      }, 1000);
    }
  }
}

document.getElementById("resetButton").onclick = setupGame;

setupGame();
