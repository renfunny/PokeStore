let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let url = `pokeItem.html?name=${searchInput.value}`;
  window.location
    .replace(url)
    .then(() => console.log("Redirected"))
    .catch((err) => console.log(err));
});
