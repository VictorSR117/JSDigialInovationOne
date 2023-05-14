const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

loadPokemonItems = (offset, limit) => {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        console.log(pokemonList);
        const newHtml = pokemons.map(pokemon =>
                `<li class="pokemon ${pokemon.type}">
                    <span class="pokemon--number">#${pokemon.number}</span>
                    <span class="pokemon--name">${pokemon.name}</span>
        
                    <div class="pokemon--detail">
                        <ol class="pokemon--types">
                            ${pokemon.types.map(type => `<li class="pokemon--type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>`
            ).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = qtdRecordWithNextPage - maxRecords;
        loadPokemonItems(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }
    else {
        loadPokemonItems(offset, limit);
    }
});