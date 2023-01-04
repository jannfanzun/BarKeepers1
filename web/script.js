let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

let getInfo = () => {
  let userInp = document.getElementById("user-inp").value;