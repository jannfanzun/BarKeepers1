const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("user-inp");
const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const getInfo = () => {
  if (!userInput.value) {
    result.innerHTML = `<h3 class="msg">Das Input Feld darf nicht leer sein!</h3>`;
    return;
  }

  fetch(url + userInput.value)
  .then(response => response.json())
  .then(data => {
    userInput.value = "";
    const drink = data.drinks[0];
    if (!drink) {
      result.innerHTML = `<h3 class="msg">Bitte geben Sie einen gültigen Namen ein!</h3>`;
      return;
    }

let ingredients = "";
for (let i = 1; i <= 18; i++) {
  if (drink[`strIngredient${i}`]) {
    ingredients += `<li>${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}</li>`;
  }
}
  result.innerHTML = `
        <img src=${drink.strDrinkThumb}>
        <h2>${drink.strDrink}</h2>
        <h3>Zutaten:</h3>
        <ul class="ingredients">${ingredients}</ul>
        <h3>Rezept:</h3>
        <p>${drink.strInstructions}</p>
      `;
    })
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Bitte geben Sie einen gültigen Namen ein!</h3>`;
    });
};

var input = document.getElementById("user-inp");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});
window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);