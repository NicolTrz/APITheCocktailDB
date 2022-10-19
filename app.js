const inputText = document.getElementById("inputText")
const containerCards = document.getElementById("containerCards")

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
    filterCocktail(URL)
})

inputText.addEventListener("keyup", () => {
    const URLfilter = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputText.value}`
    filterCocktail(URLfilter)
})

function filterCocktail(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.drinks);
        containerCards.innerHTML = (null)
        data.drinks.map(cocktail => createCards(cocktail))
    })
}

function createCards(cocktail) {
    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;
    img.setAttribute('alt', cocktail.strDrink);
    img.classList = "image" 
    
    const h2 = document.createElement("h2");
    h2.textContent = cocktail.strDrink;
    h2.classList = "h2" 

    const category = document.createElement("p");
    category.textContent = cocktail.strCategory;
    category.classList = "category" 

    const div = document.createElement("div");
    div.classList = "card" 
    
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(category);
    containerCards.appendChild(div);
}