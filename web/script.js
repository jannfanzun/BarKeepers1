let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

let getInfo = () => {
  let userInp = document.getElementById("user-inp").value;

  if (userInp.length == 0) {
    result.innerHTML = `<h3 class="msg">Das Input Feld darf nicht leer sein!</h3>`;
  } 