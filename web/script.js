const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("user-inp");
const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const getInfo = () => {
  if (!userInput.value) {
    result.innerHTML = `<h3 class="msg">Das Input Feld darf nicht leer sein!</h3>`;
    return;
  }
}

window.addEventListener("load", getInfo);
