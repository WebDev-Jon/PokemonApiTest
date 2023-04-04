let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async() => {
    let randomNumber = Math.ceil(Math.random() * 1009 + 1);

    let requestString = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${randomNumber}`;
    
    let data = await fetch(requestString)
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.regular;
    pokeNumber.textContent = `#${response.pokedexId}`;
    pokeName.textContent = response.name.fr;
}

changePokemon();
button.addEventListener("click", changePokemon);