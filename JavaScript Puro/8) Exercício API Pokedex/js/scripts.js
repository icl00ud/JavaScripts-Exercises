var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', () => {
    catchPokemons(quantidade.value);
})

catchPokemons(3);

function catchPokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
        .then(Response => Response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((valor) => {
                fetch(valor.url)
                    .then(Response => Response.json())
                    .then(pokemonSingle => {
                        pokemons.push({
                            nome: valor.name,
                            imagem: pokemonSingle.sprites.front_default
                        });
                        if (pokemons.length == quantidade) {
                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";
                            console.log(pokemons);
                            pokemons.map(function (valor) {
                                pokemonBoxes.innerHTML += `
                            <div class="pokemon-box-single">
                            <div class="pokemon-image">
                                <img src="` + valor.imagem + `">
                            </div><!--pokemon-image-->
                                <p>` + valor.nome + `</p>
                            </div><!--pokemon-box-single-->
                            `
                            })
                        }
                    })
            })
        });
}