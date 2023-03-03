document.querySelector('#search')

function getPokemon () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => console.log(data))
}
getPokemon();