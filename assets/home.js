let itemNum = 32;
let type = null;
function fetchPokemon() {
  for (let i = 0; i < itemNum; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((response) => {
      response.json().then((data) => {
        createCard(data);
      });
    });
  }
}

let cardsContainer = document.getElementById("cards-container");

function createCard(data) {
  let cardAnchor = document.createElement("a");
  cardAnchor.href = `./assets/pokeItem.html?id=${data.id}`;
  let card = document.createElement("div");
  card.classList.add("col");
  card.id = data.id;
  let cardBody = document.createElement("div");
  cardBody.classList.add("card");
  let cardImage = document.createElement("img");
  cardImage.src = data.sprites.front_default;
  cardImage.classList.add("card-img-top");
  cardImage.classList.add("card-image");
  cardImage.alt = "pokemon";
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-body");
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  let name = data.name;
  cardTitle.innerText = name.charAt(0).toUpperCase() + name.slice(1); //Capitalizes first character of the name
  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = "$4.99";
  cardBody.appendChild(cardImage);
  cardBody.appendChild(cardContent);
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardText);
  card.appendChild(cardBody);
  cardAnchor.appendChild(card);
  cardsContainer.appendChild(cardAnchor);
}

function selectCard() {
  let card = document.querySelectorAll(".card");
  card.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
    });
  });
}

fetchPokemon();
