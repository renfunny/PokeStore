let itemNum = 30;
function fetchPokemon() {
  for (let i = 0; i < itemNum; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((response) => {
      response.json().then((data) => {
        console.log(data);
        createCard(data);
      });
    });
  }
}

let cardsContainer = document.getElementById("cards-container");

function createCard(data) {
  let card = document.createElement("div");
  card.classList.add("col");
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
  cardsContainer.appendChild(card);
}

fetchPokemon();
