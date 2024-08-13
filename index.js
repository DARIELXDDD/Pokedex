document.getElementById('searchButton').addEventListener('click', fetchPokemon);

async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.trim().toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }

        const data = await response.json();
        document.getElementById('pokemonImage').src = data.sprites.front_default;
        document.getElementById('pokemonNombre').textContent = data.name;
        document.getElementById('pokemonId').textContent = data.id;
        document.getElementById('pokemonAltura').textContent = data.height / 10 + ' m';
        document.getElementById('pokemonPeso').textContent = data.weight / 10 + ' kg';

        const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        document.getElementById('pokemonTipos').textContent = tipos;

        document.getElementById('pokemonInfo').style.display = 'block';

    } catch (error) {
        alert(error.message);
    }
}
