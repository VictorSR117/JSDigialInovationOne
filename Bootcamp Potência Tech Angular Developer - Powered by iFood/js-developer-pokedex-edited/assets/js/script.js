const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 15;
const limit = 5;
let offset = 0;

convertPokemonToLi = pokemon => {
    return `
        <a href="${"https://pokeapi.co"}" target="blank" class="text--none">
            <li class="pokemon ${pokemon.type}">
                <span class="pokemon--number">#${pokemon.number}</span>
                <span class="pokemon--name">${pokemon.name}</span>

                <div class="pokemon--detail">
                    <ol class="pokemon--detail--types">
                        ${pokemon.types.map(type => `<li class="pokemon--type ${type}">${type}</li>`).join('')}
                    </ol>

                    
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

            </li>
        </a>
    `;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else loadPokemonItens(offset, limit);
    
});