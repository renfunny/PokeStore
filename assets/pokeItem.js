let urlId = new URL(window.location.href).searchParams.get("id");
let urlName = new URL(window.location.href).searchParams.get("name");

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

let name = document.getElementById("name");
let price = document.getElementById("price");
let type = document.getElementById("type");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let soundbtn = document.getElementById("sound");

if (urlName == null) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${urlId}`).then((response) => {
    response.json().then((data) => {
      console.log(data);
      image1.src = data.sprites.front_default;
      image2.src = data.sprites.back_default;
      image3.src = data.sprites.front_shiny;
      image4.src = data.sprites.back_shiny;
      name.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      type.innerText =
        data.types[0].type.name.charAt(0).toUpperCase() +
        data.types[0].type.name.slice(1);
      height.innerText = data.height / 10 + " m";
      weight.innerText = data.weight / 10 + " kg";
      price.innerText = "$4.99";
      soundbtn.addEventListener("click", () => {
        let audio = new Audio(data.cries.legacy);
        audio.play();
      });
    });
  });
} else {
  fetch(`https://pokeapi.co/api/v2/pokemon/${urlName}`).then((response) => {
    response.json().then((data) => {
      console.log(data);
      image1.src = data.sprites.front_default;
      image2.src = data.sprites.back_default;
      image3.src = data.sprites.front_shiny;
      image4.src = data.sprites.back_shiny;
      name.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      type.innerText =
        data.types[0].type.name.charAt(0).toUpperCase() +
        data.types[0].type.name.slice(1);
      height.innerText = data.height / 10 + " m";
      weight.innerText = data.weight / 10 + " kg";
      price.innerText = "$4.99";
      soundbtn.addEventListener("click", () => {
        let audio = new Audio(data.cries.legacy);
        audio.play();
      });
    });
  });
}
